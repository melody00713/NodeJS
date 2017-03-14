var express = require('express');
var app = express();
app.use(express.static("./public"));
app.get('/', function (req,res) {
    res.send("haha");
});
//会自动识别err参数
app.use(function (req,res) {
        res.send("没有这个页面");
});
app.listen(3000);