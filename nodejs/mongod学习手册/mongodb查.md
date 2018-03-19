<!-- 查找数据 -->
db.collection(表名).find(Object);
/**
 * @params[0] Object        索引
 */

<!-- 通过索引名查找数据 -->
db.collection(表名).dropIndex(String);
/**
 * @params[0] String        索引名
 */

<!-- 查看是否使用索引查询，查询所消耗时间等信息 -->
db.collection(表名).find(Object).explian();
/**
 * @params[0] Object        索引
 */