var http = require('http');
var querystring = require('querystring');
var formidable = require('formidable');
var util = require('util');
http.createServer(function(req,res){
    if(req.url == "/dopost" && req.method.toLowerCase() == 'post'){
        var form = new formidable.IncomingForm();
        //设置文件上传保存地址
        form.uploadDir = "./uploads";
        form.parse(req, function(err, fields, files) {
            if(err){throw err;}
            //filelds存放文本域
            //files存放文件域
            res.writeHead(200, {'content-type': 'text/plain'});
            console.log(fields);
            console.log(files);
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });
    }
    //res.writeHead(200, {'content-type': 'text/html'});
    //res.end(
    //    '<form action="/upload" enctype="multipart/form-data" method="post">'+
    //    '<input type="text" name="title"><br>'+
    //    '<input type="file" name="upload" multiple="multiple"><br>'+
    //    '<input type="submit" value="Upload">'+
    //    '</form>');
}).listen(3000,'127.0.0.1');