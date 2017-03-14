/**
 * Created by Administrator on 2016/12/15.
 */
//--------------------n2_funcall.js---------------------------------
var http = require('http');
var otherfun = require('./models/otherfuns.js');//调用其他文件中的js
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        //fun1(response); //调用本地函数
        //otherfun(response); // 单个函数调用
        //调用多个函数
        otherfun.fun2(response);
        //用字符串调用对应的函数  （如：路由）
        otherfun['fun3'](response);
        funname = 'fun2';
        otherfun[funname](response);
        response.end('');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
function fun1(res){
    console.log('fun1');
    res.write("hello,i am fun1");
}