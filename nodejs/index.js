// nodejs入口文件
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var http = require('http');

http.createServer(function (request, response) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
	MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("runoob");
	    dbo.collection('shoppingList').find({}).toArray(function(err, result) { // 返回集合中所有数据
	        if (err) throw err;
	        response.end(JSON.stringify(result));
	        db.close();
	    });
	});
}).listen(8888,function(){
	console.log('Server running at http://127.0.0.1:8888/');
});



