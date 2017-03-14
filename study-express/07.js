var express = require('express');
var app = express();
var a = 100;
app.get('/:username/:id', function (req,res,next) {
    //a++;
    //res.send(a.toString()); //101 102 103 104...
   console.log(1);
    var username = req.params.username;
    if(username === "admin"){
        next();
    }else{
        res.send("用户信息"+username);
    }
});
app.get('/admin/login', function (req,res) {
    console.log(2);
    res.send("管理员登录");
});
app.listen(3000);
