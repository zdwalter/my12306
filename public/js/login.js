(function() {

if (typeof window.my12306 != 'undefined') { return 0; }
var host = 'http://my12306.3322.org/'; 

window.my12306 = function() {};
var my12306 = window.my12306;

my12306.init = function() {
    function appendRequire(src) {
        var s = d.createElement('script');
        s.setAttribute('src', src);
        s.onload = onload;
        b.appendChild(s);
        cnt++;
    }
    function onload() {
        while(--cnt) { return; }
        self.start();
    }
    var self = this;
    var d = document;
    var cnt = 0;
    var b = d.body;
    if (typeof $ == 'undefined') {
      appendRequire(host+'js/jquery-1.7.1.min.js');
    }
    else {
        self.start();
    }
};

my12306.initWidget = function() {
    var d = document;
    var widget = d.createElement('div');
    widget.id = 'login.widget';
    with (widget.style) {
        position = 'fixed';
        _position = 'absolute';
        top = self.pageYOffset + 'px';
        right = '0px';
        width = '200px';
        height = '200px';
        zIndex = 9999;
        border = '1px solid';
        background = '#FFFFFF';
    }
    html = ''
    html += '<div id="login">'
    html += '<div id="form">'
    html += '<p>用户名</p>'
    html += '<input id="username"/>'
    html += '<p>密码</p>'
    html += '<input id="password" type="password"/>'
    html += '<p>验证码</p>'
    html += '<input id="randCode"/>'
    html += '<img src="https://dynamic.12306.cn/otsweb/passCodeAction.do?rand=lrand"/>'
    html += '<p><div id="note"></div></p>'
    html += '</div>'
    html += '<button onclick="javascript:window.my12306.login()" class="ui-btn-inner">登录</button></div>'

    widget.innerHTML = html;
    d.body.appendChild(widget);
    self.widget = widget;
};
my12306.start = function() {
    var self = this;
    self.initWidget();
};

my12306.isLogin =  function(data, callback) {
    var line, useful_lines, _i, _len, _ref;
    useful_lines = [];
    _ref = data.split('\n');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        if (line.match(/var.*message/) || line.match(/var.*isLogin/)) {
            //console.log(line);
            useful_lines.push(line);
        }
    }
    if (useful_lines.length === 0) {
        if (callback) return callback(false, 'fail');
    }
    eval(useful_lines.join('\n'));
    if (message.length) if (callback) return callback(isLogin, message);
    if (messageShow && messageShow.length) {
        if (callback) return callback(isLogin, messageShow);
    }
    if (callback) return callback(isLogin, '');
};

my12306.login = function() {
    var username = $('#username').val();
    var password = $('#password').val();
    var randCode = $('#randCode').val();
    var note = $('#note');
    note.html('正在登陆')
    $.ajax({
        url: host+'login'
    })
    $.ajax({
        url: 'https://dynamic.12306.cn/otsweb/loginAction.do?method=login',
        type: 'POST',
        data: {
             'loginUser.user_name': username,
             'user.password': password,
             randCode: randCode
        },
        error: function() {
            var retry;
            retry = function() {
                return my12306.login();
            };
            msg = '网络错错误';
            note.html(msg + ' (30秒后自动重试)')
            return setTimeout(retry, 30000);
        },
        success: function(data) {
            return window.my12306.isLogin(data, function(isLogin, msg) {
                var retry;
                if (isLogin) {
                    // redirect to my12306
                    var redirect = function() {
                        // window.location ="https://dynamic.12306.cn/otsweb/loginAction.do?method=initForMy12306"
                        //window.location ="https://dynamic.12306.cn/otsweb/main.jsp"
                        window.location = "https://dynamic.12306.cn/otsweb/sysuser/user_info.jsp"
                    };
                    setTimeout(redirect, 3000);
                    $.ajax({url: host+'success'});
                    alert('登陆成功,3秒后自动调转');
                } else {
                    retry = function() {
                        return my12306.login();
                    };
                    if (msg.match(/验证码/)) {
                        alert(msg);
                    }
                    else {
                        note.html(msg + ' (30秒后自动重试)')
                        return setTimeout(retry, 30000);
                    }
                }
            });
        }
    }); 
};
my12306.initAds = function() {
    var d = document;
    var widget = d.createElement('script');
    html = '<!-- google_ad_client = "ca-pub-3245882208923712"; /* 12306 */ google_ad_slot = "3639479334"; google_ad_width = 300; google_ad_height = 250; //--> </script> <script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js">'
    widget.innerHTML = html;
    d.body.appendChild(widget);
    self.widget = widget;
};
my12306.initAnalytic = function() {
    var d = document;
    var widget = d.createElement('script');
    html = "var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-28099562-1']); _gaq.push(['_trackPageview']); (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })(); "
    widget.innerHTML = html;
    d.body.appendChild(widget);
    self.widget = widget;
};


my12306.start = function() {
    var self = this;
    self.initWidget();
    self.initAds();
    self.initAnalytic();
};

my12306.isLogin =  function(data, callback) {
    var line, useful_lines, _i, _len, _ref;
    useful_lines = [];
    _ref = data.split('\n');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        line = _ref[_i];
        if (line.match(/var.*message/) || line.match(/var.*isLogin/)) {
            //console.log(line);
            useful_lines.push(line);
        }
    }
    if (useful_lines.length === 0) {
        if (callback) return callback(false, 'fail');
    }
    eval(useful_lines.join('\n'));
    if (message.length) if (callback) return callback(isLogin, message);
    if (messageShow && messageShow.length) {
        if (callback) return callback(isLogin, messageShow);
    }
    if (callback) return callback(isLogin, '');
};

my12306.init();

})();
