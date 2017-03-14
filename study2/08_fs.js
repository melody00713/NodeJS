var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){
   if(req.url == "/favicon.ico"){
      return;
   }
   var userId = parseInt(Math.random()*8999) + 10000;
   console.log("欢迎"+userId);
   fs.readFile("./test/1.txt",function(err,data){
      if(err){
         throw err;
      }
      console.log(userId+"文件读取完毕");
      res.end(data);
   });
});
server.listen(3000,"127.0.0.1");