/**
 * Created by Administrator on 2016/12/15.
 */
//console.log("hello,world")
var  http  =  require('http');//http是node自带的对象
http.createServer(function  (request,  response)  { //http自带方法
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2此访问
        console.log('访问');
        response.write('hello,world');
        response.end('你好,世界');//不写则没有http协议尾,但写了会产生两次访问
    }
}).listen(8000);//监听8000端口 意思运行在8000
console.log('Server  running  at  http://127.0.0.1:8000/');

/*
 启动服务
 cmd下执行：
 node  n1_hello.js
 浏览器访问：http://localhost:8000
 */