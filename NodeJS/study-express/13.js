var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());

app.get('/', function (req,res) {
    res.render("form");
});
app.post('/', function (req,res) {
    console.log(req.body);
});
app.listen(3000);