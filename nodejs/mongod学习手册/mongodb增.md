
<!-- 增加数据 -->
db.collection(表名).insert(Object,Object,Boolean,Boolean);
/**
 * @params[0] Object        索引
 * @params[1] Object        跟新结果
 * @params[2] [Boolean]     无查找结果是否创建
 * @params[3] [Boolean]     是否跟新集合
 */

<!-- 创建用户 -->
db.createUser({"user":"luozhou","pwd":"123456"."customData":"罗舟的用户","roles":[{"role":"userAdmin","db":"admin"},{"role":"read","db":"test"}]})