var express = require('express');
var fs = require('fs');
var app = express();
app.use(haha);
app.get('/admin', function (req,res) {
   res.send('管理员');
});
app.listen(3000);
function haha(req,res,next){
    var filePath = req.originalUrl;
    fs.readFile('./public'+filePath, function (err,data) {
       if(err){
           next();
           return;
       }
        res.send(data.toString());
    });
}