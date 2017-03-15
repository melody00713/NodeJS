var MongoClient = require('mongodb').MongoClient;
function _connectDB(callback) {
    var url = 'mongodb://localhost:27017/primer';
    MongoClient.connect(url, function (err, db) {
        callback(err, db);
    });
}
module.exports = {
    //插入单个数据
    insertOne: function (collectionName, json, callback) {
        _connectDB(function (err, db) {
            db.collection(collectionName).insertOne(json, function (err, result) {
                callback(err, result);
                db.close();
            });
        });
    },
    //插入多个数据-数组
    insertMany: function (collectionName, array, callback) {
        _connectDB(function (err, db) {
            db.collection(collectionName).insertMany(array, function (err, result) {
                callback(err, result);
                db.close();
            });
        });
    },
    //查找数据
    find: function (collectionName, json,args, callback) {
        if (arguments.length == 3) {
            var callback = args;
            var args = {"page":0,"amount":0,"sort":{}};
        }
        var _limit = args.amount || 0;
        var _skip = args.amount * args.page || 0;
        var _sort = args.sort;
        _connectDB(function (err, db) {
            db.collection(collectionName).find(json).limit(_limit).skip(_skip).sort(_sort).toArray(function (err, doc) {
                callback(err, doc);
                db.close();
            });
        });
    },
    //修改数据
    update: function (collectionName, json, newJson, callback) {
        _connectDB(function (err, db) {
            db.collection(collectionName).updateOne(json, {$set: newJson}, function (err, result) {
                callback(err,result);
            });
        });
    },
    //删除数据
    remove: function (collectionName,json,callback) {
        _connectDB(function (err,db) {
           db.collection(collectionName).deleteMany(json, function (err,result) {
              callback(err,result);
           });
        });
    },
    //获取页数
    page: function (collectionName,callback) {
        _connectDB(function (err,db) {
            db.collection(collectionName).find().count(function (err,n) {
               callback(err,n);
            });
        });
    }
};