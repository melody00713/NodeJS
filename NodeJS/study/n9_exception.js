/**
 * Created by Administrator on 2016/12/26.
 */
var http = require('http');
var url = require('url');
var router = require('./router');
var exception = require('./models/Exception');
http.createServer(function(request,response){
    if(request.url!=='/favicon.ico'){
        var pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');
        try {
           // router[pathname](request,response);
            var data = exception.expfun(0);
            response.write(data);
            response.end('');
        }catch (err){
            console.log('aaaa='+err);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log('server执行完毕');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
