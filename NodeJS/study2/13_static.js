var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
http.createServer(function (req,res) {
    var pathname = url.parse(req.url).pathname;
    //判断是文件夹还是文件
    if(pathname.indexOf('.') == -1){
        pathname+="/index.ejs";
    }
    var fileURL = './'+path.normalize("./static/"+pathname);
    //拓展名
    var extname = path.extname(pathname);
    fs.readFile(fileURL, function (err,data) {
        //res.writeHead(404, {"Content-type":"text/html;charset=UTF8"});
        if(err) {
            fs.readFile("./static/404.html",function(err,data){
                res.writeHead(404, {"Content-type":"text/html;charset=UTF8"});
                res.end(data);
            });

            return;
        }
        getMime(extname,function(mime){
            res.writeHead(200,{"Content-type":mime});
            res.end(data);
        });

    });
}).listen(3000,"127.0.0.1");

function getMime(extname,callback){
    fs.readFile('./static/json/mime.json',function(err,data){
        if(err){
            throw Error('找不到mime.json文件');
            return;
        }
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname] || "text/plain";
        callback(mime);
    });
    //switch (extname){
    //    case ".html":
    //        return "text/html";
    //    case ".jpg":
    //        return "image/jpg";
    //    case ".css":
    //        return "text/css";
    //}
}
