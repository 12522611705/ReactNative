// nodejs入口文件
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    dbo.collection('userList');
});