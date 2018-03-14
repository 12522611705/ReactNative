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
git rm -r --cached '*'(清空git暂存区)
rm b.txt （删除文件）

<!-- 分支创建  -->
git branch (显示当前分支,如:master) 
git branch sie-branch(创建分支) 
git checkout sie-branch(切换到新分支) 

<!-- 从已有的分支创建新的分支(如从master分支),创建一个dev(develop简写)分支(相当于复制分支)  -->
git checkout -b dev 

<!-- 另一种push分支,如果是在当前loc-dev分支下,则可以只写git push  -->
git push origin loc-dev:remote-branch-dev
git push -f origin master
-f参数强行推送代码

<!-- 分支拉取  -->
git pull origin dev 

<!-- 本地分支合并  -->
git checkout master(切换到新主干) 
git merge sie-branch(把分支合并到主干) 

<!-- 远程分支合并(多一个远端地址和一个反斜杠/)  -->
git merge origin/b 
git branch(显示当前分支是master) 
git push(此时主干中也合并了sie-branch的代码) 

<!-- 冲突解决(Updated upstream 与==== 之间的是pull下来的内容,若不需要则删除,也可以删除本地的那一行)  -->
git stash(暂存本地内容) 
git pull 
git stash pop stash@{0}{ stash@{0}修改标记,还原暂存的内容} 

<!-- 删除分支(前提是被删除的分支不是当前所在分支,否则删除不了)  -->
git pull origin –delete dev 
//另一种删除分支 
git push origin :dev 

<!-- 消除master分支的追踪 设置指定分支  -->
git branch –set-upstream-to=origin/dev 

<!-- 取消对master的跟踪 -->
git branch –unset-upstream master