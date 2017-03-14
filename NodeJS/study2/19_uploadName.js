/**
 * Created by Administrator on 2017/2/27.
 */
var http = require('http');
var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');
http.createServer(function (req,res) {
    if(req.url === "/dopost" && req.method.toLowerCase() === 'post'){
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, function (err,fields,files) {
            if(err){throw err;}
            console.log(util.inspect({fileds:fields,files:files}));
            var t = sd.format(new Date(),'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random()*89999+10000);
            var extname = path.extname(files.photo.name);

            var oldName = __dirname + '/' + files.photo.path;
            var newName = __dirname + '/uploads/' + t + ran + extname;
            fs.rename(oldName,newName, function (err) {
                if(err){throw err;}
                res.writeHead(200,{"Content-type":"text/plain"});
                res.end('成功');
            });
        });
    }else if(req.url == '/'){
        fs.readFile('./test/post.html',function(err,data){
            if(err){throw err;}
            res.writeHead(200,{"Content-type":"text/html"});
            res.end(data);
        });
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('错误');
    }
}).listen(3000,'127.0.0.1');
