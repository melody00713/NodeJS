var http = require('http');
var url = require('url');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var ejs = require('ejs');
var sd = require('silly-datetime');
http.createServer(function (req, res) {
    if (req.url == "/favicon.ico") {
        return;
    }
    var dictionary = {album: []}, html;
    if (req.url == '/') {
        fs.readFile(__dirname + '/views/index.ejs', function (err, data) {
            if (err) {
                throw err;
            }
            fs.readdir(__dirname + '/uploads', function (err, files) {
                console.log(files)
                if (err) {
                    throw err;
                }
                (function iterator(i){
                    if(i == files.length){
                        html = ejs.render(data.toString(), dictionary);
                        res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
                        res.end(html);
                        return;
                    }
                    fs.stat(__dirname + '/uploads/' + files[i], function (err, stats) {
                        if (stats.isDirectory()) {
                            dictionary.album.push({"title": files[i]});
                        }
                        iterator(i+1);
                    });
                })(0);
                //for (let i = 0; i < files.length; i++) {
                //    fs.stat(__dirname + '/uploads/' + files[i], function (err, stats) {
                //        if (stats.isDirectory()) {
                //            dictionary.album.push({"title": files[i]});
                //        }
                //        if (i == files.length - 1) {
                //            console.log(i);
                //            html = ejs.render(data.toString(), dictionary);
                //            res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
                //            res.end(html);
                //        }
                //    });
                //}
            });
        });
    } else if (req.url == '/admin') {
        fs.readFile(__dirname + '/views/admin.ejs', function (err, data) {
            if (err) {
                throw err;
            }
            fs.readdir(__dirname + '/uploads', function (err, files) {
                if (err) {
                    throw err;
                }
                for (let i = 0; i < files.length; i++) {
                    fs.stat(__dirname + '/uploads/' + files[i], function (err, stats) {
                        if (stats.isDirectory()) {
                            dictionary.album.push({"title": files[i]});
                        }
                        if (i == files.length - 1) {
                            html = ejs.render(data.toString(), dictionary);
                            res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
                            res.end(html);
                        }
                    });
                }
            });
        });
    } else if (req.url == '/dopost' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = './uploads';
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }
            if (fields.newAlbum) {
                fs.mkdir(__dirname + '/uploads/' + fields.newAlbum, function (err) {
                    if (err) {
                        throw err;
                    }
                });
            }
            var t = sd.format(new Date(), 'YYYYMMDDHHmmss');
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extname = path.extname(files.photo.name);

            var oldName = __dirname + '/' + files.photo.path;
            var newName = __dirname + '/uploads/' + (fields.newAlbum || fields.album) + '/' + t + ran + extname;
            fs.rename(oldName, newName, function (err) {
                if (err) {
                    throw err;
                }
                res.writeHead(200, {"Content-type": "text/plain"});
                res.end('成功');
            });
        });

    } else {
        var pathname = url.parse(req.url).pathname;
        var extname = path.extname(pathname);
        if(pathname.indexOf('.') == '-1'){
            fs.readdir(__dirname + '/uploads/' + pathname, function (err, files) {
                if (err) {
                    res.writeHead(404, {"Content-Type": "text/plain"});
                    res.end('无此路径');
                }
                var album = {"photo":files,"path":pathname};
                fs.readFile(__dirname + '/views/photo.ejs', function (err,data) {
                    var html = ejs.render(data.toString(), album);
                    res.writeHead(200, {"Content-Type": "text/html;charset=utf8"});
                    res.end(html);
                });
            });
        }else if(pathname == '/favicon.ico'){
            res.end();
        }else {
            fs.readFile(__dirname +  pathname, function (err,data) {
                if(err){throw err;}
                getMime(extname,function(mime){
                    res.writeHead(200,{"Content-type":mime});
                    res.end(data);
                });
            });
        }
    }

}).listen(3000, '127.0.0.1');
function getMime(extname,callback){
    fs.readFile('./mime.json',function(err,data){
        if(err){
            throw Error('找不到mime.json文件');
            return;
        }
        var mimeJSON = JSON.parse(data);
        var mime = mimeJSON[extname] || "text/plain";
        callback(mime);
    });
}