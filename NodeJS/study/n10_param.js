/**
 * Created by Administrator on 2017/1/14.
 */
var http = require('http');
var url = require('url');
var router = require('./router');
http.createServer(function(requst,response){
    if(requst.url!=='/favicon.ico'){
        var pathname = url.parse(requst.url).pathname;
        pathname = pathname.replace(/\//,'');
        try{
            router[pathname](requst,response);
        }catch (err){
            console.log('出错'+err);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log('执行完毕');
    }
}).listen(8000);
console.log('Server running at http:127.0.0.1:8000');
