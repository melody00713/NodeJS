/**
 * Created by Administrator on 2016/12/15.
 */
var http = require('http');
var optfile = require('./models/optfile');
var url = require('url');
var router = require('./router');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        //optfile.readfileSync('./views/login.html',response);


        //function recall(data){//闭包  储存response
        //    response.write(data);
        //    response.end('ok');
        //}
        //optfile.readfile('./views/login.html',response);
        //optfile.readfile('./views/login.html',recall);
        //response.end('ok');

        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        router[pathname](request,response);
        console.log('主程序执行完毕');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');