参考文档连接：
1.https://www.yiibai.com/mongodb/mongodb_quick_guide.html
2.https://cnodejs.org/topic/548e548e57fd3ae46b233500

windows下启动mongodb数据库: mongo ./bin/mongo

概览：
1._id索引        db.runoob.ensureIndex({_id:1})
2.单键索引       db.runoob.ensureIndex({x:1})
3.多建索引       db.runoob.ensureIndex({x:[1,2,3,4]})
4.复合索引       db.runoob.ensureIndex({x:1},{y:2})
5.过期索引       db.runoob.ensureIndex({x:1},{expireAfterSeconds:10})
6.全文索引       db.runoob.ensureIndex({'$**':'text'})
7.地理位置索引   db.runoob.ensureIndex({"w":"2d"})

<!-- 查看集合的索引情况 -->
db.runoob.getIndexes()

<!-- 创建索引 -->
db.runoob.ensureIndex(Object,Object);
/**
 * @params[0]  Object   索引的参数
 * @params[1]  [Object] 索引的属性
 */

<!-- 创建过期索引 -->
db.runoob.ensureIndex({x:1},{expireAfterSeconds:10}) 
/**
 * @params[0]  Object   x为1代表正向排序，x为-1代表逆向排序
 * @params[1]  [Object] 创建过期索引，值为毫秒
 */
ps: 过期所以过期后会数据会被删除
1、存储在过期索引字段的值必须是指定的时间类型
	说明:必须是ISODate或者ISODate数组，不能使用时间戳，否则不能被自动删除
2、过期所以不能是复合索引
3、过期所以时间间隔最小为60s

<!-- 创建唯一索引 -->
db.runoob.ensureIndex({x:1},{unique:true}) 
ps: 唯一索引如果已存在则不插入，不存在则插入
/**
 * @params[0]  Object   x为1代表正向排序，x为-1代表逆向排序
 * @params[1]  [Object] true为创建唯一性
 */

<!-- 创建稀疏索引 -->
db.runoob.ensureIndex({x:1},{sparse:true}) 
/**
 * @params[0]  Object   x为1代表正向排序，x为-1代表逆向排序
 * @params[1]  [Object] true为创建唯一性
 */

<!-- 创建地理位置索引 -->
一、2D索引：平面地理位置索引
db.runoob.ensureIndex({"w":"2d"}) //创建
-位置表示方式：经纬度[经度，纬度]
-取值范围：经度[-180,180],纬度[-90，90]
使用：
db.runoob.ensureIndex({"w":{$near:[1,2],$maxDistance:10}});
-$near:[1,2] //默认返回100个相近的点
-$maxDistance:10 //限制长度10个

1.形状的表示方式：
$box:矩形，使用   {$box:[[<x1>,<y1>],[<x2>,<y2>]]}表示
$center:圆形，使用   {$center:[[<x1>,<y1>],r]表示
$polygon:多边形，使用  {$polygon:[[<x1>,<y1>],[<x2>,<y2>],[<x3>,<y3>]]}表示
使用：
db.runoob.ensureIndex({"w":{$geoWithin:{$box:[[0,0],[3,3]]}}});

二、2D sphere 索引
db.runoob.ensureIndex({"w":"2dsphere"}) //创建
位置表示方式
GeoJSON:描叙一个点，一条直线，多边形等形状
格式：{type:'',coordinates:[<coordinates>]}
查询索引和2d索引查询方式类似
支持$minDistance与$maxDistance

优点：加快索引相关的查询
缺点：增加磁盘空间的消耗，降低写入性能

<!-- 创建全文索引 -->
db.runoob.ensureIndex({'$**':'text'})
/**
 * @params[0]  Object   '$**'代表给集合中所有的字段创建一个索引
 */
1.全文索引的使用：
db.runoob.find({$text:{$search:"aa"}}) //表示全文查询
db.runoob.find({$text:{$search:"aa bb cc"}}) //空格隔开表示或查询
db.runoob.find({$text:{$search:"aa bb -cc"}}) //表示筛选查询
db.runoob.find({$text:{$search:"\"aa\" \"bb\" \"-cc\""}}) //多条件查询

2.全文索引相似度查询：
$meta操作符：{score:{$meta:"textScore"}} 返回相似度权重,查询结果会多一个score字段，可用排序;
使用：
db.runoob.find({$text:{$search:"aa"}},{score:{$meta:"textScore"}}).store({score:{$meta:"textScore"}}) 

3.全文索引的使用限制：
1、每次查询只能指定一个$text查询
2、$text查询不能出现在$nor查询中
3、查询中如果包含了$text,hint不再起作用
4、MongoDB全文索引不支持中文


