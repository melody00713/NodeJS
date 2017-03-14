var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
    if(req.url == "/fang"){
        fs.readFile("./test/test.html",function(err,data){
            res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if(req.url == "/yuan"){
        fs.readFile("./test/test1.html",function(err,data){
            res.writeHead(200,{"content-type":"text/html;charset=UTF-8"});
            res.end(data);
        });
    }else if(req.url == "/pig.png"){
        fs.readFile("./test/pig.png",function(err,data){
            res.writeHead(200,{"content-type":"image/png"});
            res.end(data);
        });
    }else if(req.url == "/bbb.css"){
        fs.readFile("./test/css.css",function(err,data){
            res.writeHead(200,{"content-type":"text/css;charset=UTF-8"});
            res.end(data);
        });
    }else{
        res.writeHead(404,{"content-type":"text/html;charset=UTF-8"});
        res.end("哈哈，没有这个页面");
    }

});
server.listen(3000,"127.0.0.1");