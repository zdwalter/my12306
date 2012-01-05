/*
 * GET home page.
 */
log = function(req) {
    console.log(new Date(), req.connection.remoteAddress, req.headers.origin, req.headers['user-agent']);
    console.log(req.connection);
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
