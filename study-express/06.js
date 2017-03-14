var http = require('http');
var a = 100;
http.createServer(function (req,res) {
    a++;
    res.end(a.toString());
}).listen(3000,'127.0.0.1');