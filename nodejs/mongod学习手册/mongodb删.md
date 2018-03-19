<!-- 删除数据 -->
db.collection(表名).remove(Object);
/**
 * @params[0] Object  索引
 */

<!-- 删除表名 -->
db.collection(String).drop();
/**
 * @params[0] String  表名
 */