/**
 * Created by Administrator on 2017/2/9.
 */
var http = require("http");
var server = http.createServer(function(req,res){
    console.log("服务器接受到了请求"+req.url);
    //设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    res.write("<h1>我是主标题</h1>");
    res.end("<h1>我是一个主标题</h1>");
});
server.listen(3000);