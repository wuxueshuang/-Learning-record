##nodeJs小解

nodejs解析器跟chrome浏览器的解析器一样，V8引擎

**Node.js** 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。

nodeJs中我们要记得：有问题，找模块，通过**npm**找模块

**npm** 包管理工具

**安装nodeJs，Vue脚手架**
> http://weex.apache.org/cn/guide/
> 
> *	1.安装**vue-cli**:工具在dos窗口中敲：
> **npm i vue-cli -g**
> 
>*  2.安装完成之后，在命令行中敲 **vue -V** 出现版本，说明安装成功> 
> 
>* 3.选择一个目录，敲命令 vue init webpack project
> 
>* 4.然后一路回车，在提醒中选择vue-router为Y，其余的都为N
> 
>* 5.然后进到cd project目录中，敲命令 npm i,然后安装模块;
> 

##安装模块 

**npm install(i) <模块名>**

安装之后会在目录下创建一个node_modules 第三方的模块都会安装在这里

**管理安装模块源**

管理模块的源 默认是**npm网站**安装，太慢了

淘宝将npm网站的模块做成了镜像，因为淘宝服务器在本地，考虑把下载源设置淘宝上

一般我们交给nrm模块帮我们去管理：

**nrm ls** 查看所有的源

**nrm user 源名** 切换到指定源上


##卸载模块 
**npm uninstall <模块名>**


##工作中使用node流程

创建一个新项目时，在自己的电脑上生成项目的描述文件  打开命令提示框 ：npm init

安装模块要放在描述文件中 用： npm i <模块名> --save

当拿到描述文件，第一件事情就是安装依赖的模块  npm i




























####nodeJS参考网址：

英文官网 https://nodejs.org/en/

中文官网 http://nodejs.cn/