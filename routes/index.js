/*
 * GET home page.
 */
log = function(req) {
    console.log(req.connection.remoteAddress, req.headers.origin, req.headers['user-agent'])
};

exports.index = function(req, res){
    log(req);
  res.render('index', { title: '我的12306' })
};

exports.login = function(req, res) {
    log(req);
    res.end();
}

exports.load = function(req, res) {
    log(req);
    res.end();
}
