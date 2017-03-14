var express = require('express');
var app = express();
var db = require('./models/db');
var Formidable = require('formidable');
app.set('view engine','ejs');
app.use(express.static("./public"));
//显示留言列表
app.get('/', function (req,res,next) {
   res.render("index");
});
app.post('/dopost', function (req,res,next) {
   var form = new Formidable.IncomingForm();
   form.parse(req, function (err,fields) {
      if(err){
         return;
      }
      db.insertOne("guest",fields, function (err,result) {
         if(err){
            res.json(err);
            return;
         }
         res.json(result);
      });
   });
});
app.get('/guestList', function (req,res,next) {
   var page = parseInt(req.query.page);
   db.find('guest',{},{"amount":4,"page":page,"sort":{"time":-1}}, function (err,result) {
      if(err){
         res.json({"ok":-1,"msg":0});
         return;
      }
      res.json({"ok":0,"msg":result});
   });
});
app.listen(3000);