/**
 * Created by Administrator on 2016/12/15.
 */
var http = require('http');
var User = require('./models/User.js');
var Teacher = require('./models/Teacher.js');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        user = new User(1,'张三',20);
        user.enter();
        teacher = new Teacher(2,'李四',30);
        teacher.enter();
        teacher.teach(response)
        response.end('');
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');
