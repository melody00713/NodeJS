/**
 * Created by Administrator on 2016/12/15.
 */
var http = require('http');
var optfile = require('./models/optfile');
http.createServer(function(request,response){
    //response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.writeHead(200,{'Content-Type':'image/jpeg'});
    if(request.url!=='/favicon.ico'){
        //response.write('hello');//写任何字符串都是失败
        optfile.readImg('./imgs/pig.png',response);
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');