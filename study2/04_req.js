var http = require("http");
var server = http.createServer(function(req,res){
    console.log(req.url);
    //res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    res.end();
}).listen(3000,"127.0.0.1");