var file = require('../models/file');
var formidable = require('formidable');
var path = require('path');
var fs = require('fs');
exports.showIndex = function (req, res,next) {
    //res.send('homepage');
    //res.render("index",{
    //    "albums":file.getAllAlbums()
    //});
    //node所以的东西都是异步的
    //内层函数不是return回来东西，而是调用高层函数提供的回调函数。把数据当做参数
    file.getAllAlbums(function (err, allAlbums) {
        if (err) {
            next();
            return;
        }
        res.render("index", {
            "albums": allAlbums
        });
    });
};
exports.showAlbum = function (req, res,next) {
    //res.send("相册" + req.params.albumName);
    //遍历相册中的所有图片
    var albumName = req.params.albumName;
    //具体业务交给model
    file.getAllImagesByAlbumName(albumName, function (err,imagesArray) {
        if(err){
            next();
            return;
        }
        res.render('album', {
            "albumName": albumName,
            "images": imagesArray
        });
    });
};
exports.showUp = function (req,res,next) {
    file.getAllAlbums(function (err, allAlbums) {
        if (err) {
            next();
            return;
        }
        res.render("form", {
            "albums": allAlbums
        });
    });
};
exports.addNewAlbum = function (req,res,next) {
    var albumName = req.query['newAlbum'];
    file.addAlbum(albumName,function (err,data) {
        if(err){
            next();
            return;
        }
        res.send(data);
    });
};
exports.addNewImage = function (req,res,next) {
    var form = formidable.IncomingForm();
    form.uploadDir = path.normalize(__dirname + '/../' +'/tempup/') ;
    form.parse(req, function (err,fields,files,next) {
        console.log({fields: fields, files: files});
        if(err){
            next();
            return;
        }
        //var size = parseInt(files.image.size);
        //if(size > 1024){
        //    res.send('图片过大');
        //    fs.unlink(files.image.path);
        //    return;
        //}
        var oldPath = files.image.path;
        var newPath = path.normalize(__dirname + '/../' +'/uploads/'+ fields.album +'/' + (new Date().getTime()) + path.extname(files.image.name));
        fs.rename(oldPath,newPath, function (err) {
            if(err){
                next();
            }
        });
    });
};