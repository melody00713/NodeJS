var http = require("http");
var server = http.createServer(function(req,res){
    //得到url
    var userUrl = req.url;
    //substr函数来判断此时的开头
    res.writeHead(200,{"Content-type":"text/plain,charset=UTF8"});
    if(userUrl.substr(0,9) == "/student/"){
        var studentId = userUrl.substr(9);
        if(/^\w{10}$/.test(studentId)){
            res.end("查询学生ID为"+studentId);
        }else{
            res.end("学生学号位数不正确");
        }
    }else if(userUrl.substr(0,9) == "/teacher/"){
        var teacherId = userUrl.substr(9);
        if(/^\w{6}$/.test(teacherId)){
            res.end("查询学生ID为"+teacherId);
        }else{
            res.end("老师学号位数不正确");
        }
    }else{
        res.end("请检查URL");
    }
});
server.listen(3000,"127.0.0.1");