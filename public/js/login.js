(function() {

if (typeof window.my12306 != 'undefined') { return 0; }
var host = 'http://my12306.3322.org/'; 

var window.my12306 = function() {};
my12306 = window.12306;

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
};

my12306.start = function() {
    alert('start');
};

my12306.init();

})();
