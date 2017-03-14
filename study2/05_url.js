var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url).query;
    var queryObj = url.parse(req.url,true).query;
    var hash = url.parse(req.url).hash;
    console.log("pathname:" + pathname);
    console.log( query);
    res.end();
}).listen(3000,"127.0.0.1");