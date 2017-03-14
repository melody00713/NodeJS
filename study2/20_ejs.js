//var ejs = require('ejs');
//var string = "今天<%= a %>s";
//var data = {a:6};
//var html = ejs.render(string,data);
//console.log(html);
var ejs = require('ejs');
var fs = require('fs');
var http = require('http');
http.createServer(function (req,res) {
    fs.readFile('./views/index.ejs', function (err,data) {
        var template = data.toString();
        var dictionary = {
            a:6,
            news:[
                {"name":'melo',"count":10},
                {"name":'neo',"count":20},
                {"name":'json',"count":15},
                {"name":'david',"count":5},
            ]
        };
        var html = ejs.render(template,dictionary);
        res.writeHead(200,{"Content-type":'text/html;charset=utf8'});
        res.end(html);
    });
}).listen(3000,'127.0.0.1');
