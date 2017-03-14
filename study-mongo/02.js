var express = require('express');
var app = express();
var db = require('./models/db');

app.get('/insertOne', function (req, res) {
    db.insertOne("primer", {"name": "hehe", "age": 15}, function (err, result) {
        if (err) {
            console.log("插入失败");
            return;
        }
        res.send("插入成功");
    });
});
app.get('/insertMany', function (req, res) {
    db.insertMany("primer", [{"name": "1"}, {"name": "2"}], function (err, result) {
        if (err) {
            console.log("插入失败");
            return;
        }
        res.send("插入成功");
    });
});
app.get('/find', function (req, res) {
    var page = req.query.page;
    db.find("primer", {"grades.score": {$gt: 20}}, {"page": page, "amount": 10}, function (err, doc) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(doc);
    });
});
app.get('/update', function (req, res) {
    var borough = req.query.borough;
    var newBorough = req.query.newBorough;
    db.update("primer", {"borough": borough}, {"borough": newBorough}, function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        res.send(result);
    });
});
app.get('/remove', function (req, res) {
    var borough = req.query.borough;
    db.remove("primer", {"borough": borough}, function (err, result) {
        if (err) {
            console.log("删除失败");
            return;
        }
        res.send(result);
    });
});
app.listen(3000);