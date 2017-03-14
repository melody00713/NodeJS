var fs = require('fs');
exports.getAllAlbums = function (callback) {
    fs.readdir('./uploads', function (err,files) {
        if(err){
            callback("没有找到文件夹",null);
        }
        var allAlbums = [];
        (function iterator(i) {
            if(i == files.length){
                callback(null,allAlbums);
                return;
            }
            fs.stat('./uploads/' + files[i], function (err,stats) {
                if(err){
                    callback("没有找到文件"+files[i],null);
                }
                if(stats.isDirectory()){
                    allAlbums.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};
//通过文件名得到所有图片
exports.getAllImagesByAlbumName = function (albumName,callback) {
    fs.readdir('./uploads/'+albumName, function (err,files) {
        if(err){
            callback("没有找到文件夹",null);
            return;
        }
        var imagesArray = [];
        (function iterator(i) {
            if(i == files.length){
                callback(null,imagesArray);
                return;
            }
            fs.stat('./uploads/' + albumName + '/' + files[i], function (err,stats) {
                if(err){
                    callback("没有找到文件"+files[i],null);
                    return;
                }
                if(stats.isFile()){
                    imagesArray.push(files[i]);
                }
                iterator(i+1);
            });
        })(0);
    });
};
exports.addAlbum = function (albumName,callback) {
    fs.mkdir('./uploads/'+albumName, function (err) {
        if(err){
            callback(err,null);
            return;
        }
        callback(null,{"status":0,"msg":albumName});
    });
};