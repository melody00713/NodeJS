var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
    var queryObj = url.parse(req.url,true).query;
    var name = queryObj.name;
    var age = queryObj.age;
    var gender = queryObj.gender;
    res.end("服务器收到了表单请求"+name+age+gender);
}).listen(3000,"127.0.0.1");

