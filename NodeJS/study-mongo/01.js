var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

app.get("/", function (req,res) {
    var url = 'mongodb://localhost:27017/test';
    MongoClient.connect(url, function (err,db) {
       if(err){
           console.log("mongoDB fail");
           return;
       }
        console.log("mongoDB success");
        db.collection('student').insertOne({
            "name":"haha",
            "age":28
        }, function (err,result) {
            console.log(result);
            res.send("insert success");
            db.close();
        });
    });
});
app.listen(3000);