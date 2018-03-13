// nodejs入口文件
var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "罗舟", url: "luozhou.com" };
    dbo.collection("site").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        // db.close();
    });
});