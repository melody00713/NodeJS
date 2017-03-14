var express = require('express');
var app = express();
//改变render查找路径  默认views
app.set("views","a");
app.set("view engine","ejs");
app.get('/', function (req,res) {
   res.render("haha");
});
app.get("/check", function (req,res) {
   res.send([{"user":"ok"}]);
});
app.listen(3000);