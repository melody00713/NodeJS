var http = require('http');
var querystring = require('querystring');
http.createServer(function(req,res){
    if(req.url == "/dopost" && req.method.toLowerCase() == 'post'){
        var alldata = "";
        req.addListener("data",function(chunk){
            alldata += chunk;
        });
        req.addListener("end",function(){
            var dataString = alldata.toString();
            console.log(alldata.toString());
            var dataObj = querystring.parse(dataString);
            res.end("success");
            console.log(dataObj);
        });
    }
}).listen(3000,'127.0.0.1');