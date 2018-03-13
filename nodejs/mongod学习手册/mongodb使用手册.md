概览：
1._id索引        db.runoob.ensureIndex({_id:1})
2.单键索引       db.runoob.ensureIndex({x:1})
3.多建索引       db.runoob.ensureIndex({x:[1,2,3,4]})
4.复合索引       db.runoob.ensureIndex({x:1},{y:2})
5.过期索引       db.runoob.ensureIndex({x:1},{expireAfterSeconds:10})
6.全文索引       db.runoob.ensureIndex({'$**':'text'})
7.地理位置索引    


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

<!-- 全文索引 -->
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


git add readme.txt(添加到暂存区里) 
git status(未提交时 出现红色提醒) 
git commit -m ‘提交时的注释 描述’ 
git status(提交后 出现绿色提醒) 
git commit -a(自动更新变化的文件,auto) 
git diff readme.txt(用来查看修改前后的对比,在有修改时使用) 
git log(查看提交历史,倒序记录: 信息包括提交版本号,作者,时间,提交内容) 
git log –pretty=oneline(简要查看历史,每次修改显示在一行) 
git reset –hard HEAD^(把当前的版本回退到上1个版本) 
git reset –hard HEAD^^(把当前的版本回退到上上1个版本) 
git reset –hard HEAD~100(把当前的版本回退到上100个版本) 
git checkout –readme.txt(会撤销修改但还没添加到缓存区stage的内容) 
cat readme.txt (查看内容 )
rm b.txt （删除文件）
git rm -r --cached '*'(清空git暂存区)


//分支创建 
git branch (显示当前分支,如:master) 
git branch sie-branch(创建分支) 
git checkout sie-branch(切换到新分支) 

//从已有的分支创建新的分支(如从master分支),创建一个dev(develop简写)分支(相当于复制分支) 
git checkout -b dev 

//另一种push分支,如果是在当前loc-dev分支下,则可以只写git push 
git push origin loc-dev:remote-branch-dev 

//分支拉取 
git pull origin dev 

//本地分支合并 
git checkout master(切换到新主干) 
git merge sie-branch(把分支合并到主干) 

//远程分支合并(多一个远端地址和一个反斜杠/) 
git merge origin/b 
git branch(显示当前分支是master) 
git push(此时主干中也合并了sie-branch的代码) 

//冲突解决(Updated upstream 与==== 之间的是pull下来的内容,若不需要则删除,也可以删除本地的那一行) 
git stash(暂存本地内容) 
git pull 
git stash pop stash@{0}{ stash@{0}修改标记,还原暂存的内容} 

//删除分支(前提是被删除的分支不是当前所在分支,否则删除不了) 
git pull origin –delete dev 
//另一种删除分支 
git push origin :dev 

//消除master分支的追踪 
设置指定分支 
git branch –set-upstream-to=origin/dev 

取消对master的跟踪 
git branch –unset-upstream master