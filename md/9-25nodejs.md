#nodejs
基于chrome V8引擎的JavaScript运行环境

**nodejs和npm包管理器密不可分**

**npm官网：http：//npmjs.com**

##nodejs之模块
在nodejs中一个文件就是一个模块

###加载模块
*	**1**.加载一个**文件模块**

	**require****（"相对路径或绝对路径"）**//一定要加路径

* **2**.**内置模块**（其实也是文件夹模块）：第二方，node提供的；

	无需使用npm下载，安装node时已经安装好了(eg:fs.http);

* **3.文件夹模块**/第三方模块：别人提供的

##模块加载器简介：
**用在浏览器端。在ES6规范之前**

		Seajs       国内      （依赖就近）
				CMD 规范 定义引入模块语法
					引入模块 require（）
					定义模块
						defined（function（require）{
						}）
		requirejs   国外      （依赖前置） 后来require也实现了依赖就近的原则
				AMD 规范


###在nodejs中一个文件就是一个模块

在**utils.js**中定义函数：

	function add (a,b){
		return a+b;
	}
	function isFunction(fn){
		return typeof fn === "function"
	}	
	/*
		module.exports.add = add;
		module.exports.isFunction = isFunction;
	*/
	//module.exports可以被改写
	module.exports = {
		add,
		isFunction
	}

在文件中**调用工具函数**时：

eg:在**index.js**中调用**utils**中的函数


在**utils.js**中：
把要暴露的函数挂载在**module.exports**，module.exports对外输出的值

当**index.js**中使用**require**加载这个模块的时候，默认会返回**utils.js**中模块的**module.exports**这个对象	

	//使用工具函数那个模块中的函数
	let u = require("./utils.js")
	console.log(u);//返回的是 utils.js文件中module..exports挂在的属性
	let http = require("http");
	console.log(http);
	let fs = require("fs");
	// console.log(fs);

###http模块，fs模块:

**使用http模块和fs模块的思路：**

*	1.引入http和fs模块
	
> 		let http = require("http");
> 		let fs = require("fs");
		
*	2.开启/创建一个服务器：
>语法：**http.createServer()**
>参数：
>
>*    require:简写：req：**request****对象**，保留的是请求的信息
>*    response简写：res：**reponse对象**，保留的是响应的一些方法
**>在创建的服务器中做一些事情**

*   3.监听端口：
	
> 		app.listen(3000,()=>{
> 			console.log("服务启动了");
> 		})

*  4.用node启动的js文件，每次修改完都要重新启动

> **nodejs创建服务监听端口小例子：**
> 
> 	let app = http.createServer((req,res) ={
> 		// 当有请求过来了，会触发这个函数
> 		console.log("有请求来了");
> 		//console.log(req);
> 	
> 		res.write('ok'); //向客户端响应内容
> 		res.end();
> 	})
> 	
> 	app.listen(3000, () ={
> 		console.log("服务启动了");
> 	})

***思考***：这只是直接请求服务器，如果请求服务器下的具体的文件要怎么办呢？

*	1.req是请求的信息对象，通过**req.url**可以得到访问的文件的路径
*	2.fs.readFile将路径映射的文件返回给前端；

**注意**	

*	1.后端返回的数据为buffer格式；
*	2.通过toString()方法转成我们能看懂的格式；括号里接收参数，如果不写默认为'utf-8'

> 	if(req.url === '/index.html'){
> 		// 返回index.html，需要读取index.html里面的内容发送
> 
> 		fs.readFile('./views/index.html', (error,data) ={
> 			if(error){
> 				console.log(error);
> 			}else{
> 				console.log(data);  // buffer类型的里面存的额是二进制的
> 				console.log( data.toString('utf-8') );
> 				res.write(data); //向客户端响应内容
> 				res.end();//明确的说明响应结束
> 			}
> 			
> 		})
> 	}else if(req.url === "/customs.html"){
         fs.readFile('./views/customs.html',(error,data)=>{
			if(error){
				console.log(error);
			}else{
				console.log(data);//data是一个buffer格式的数据
				console.log(data.toString());//转成我们能看懂的格式。如果不写参数，默认是utf-8，也就是我们看到的html结构
			}   console.log(data.toString('utf-8'));
			res.write(data);//向客户响应信息
			res.end();//明确说明，响应结束
		})

> 	}else if(){
>
> 	}else if(){
>
> 	}else{
>
> 	}
	
获取**访问文件路径函数**封装简化代码：

> 	let http = require("http");
> 	let fs = require("fs");
> 	let app = http.createServer((req,res)=>{
> 		console.log("有请求来了");
> 		console.log(req.url);//拿到地址栏的路径
> 		if(req.url === "/index.html"){
> 			getHtmlData('./views/index.html',function(data){
> 				console.log(data);
> 				res.write(data);
> 				res.end();
> 			})
> 		}else if(req.url === "/customs.html"){
> 			getHtmlData('./views/customs.html',function(data){
> 				console.log(data);
> 				res.write(data);
> 				res.end();
> 			})
> 		}
> 		function getHtmlData(filePath,callback){//错误前置的原则
> 		fs.readFile(filePath,(error,data)=>{
> 			if(error){
> 				console.log(error);
> 			}else{
> 				callback(data);
> 			}
> 		})
> 	}
> 	app.listen(3000,()=>{
> 		console.log("服务启动了");
> 	})

获取**访问文件路径函数**封装Promise方法简化代码：


	function readFilePromise(filePath){
		return new Promise((resolve,reject)=>{
			fs.readFile(filePath,(error,data)=>{//错误优先的原则
				if(error){
					reject(error);
				}else{
					resolve(data);
				}
			})
		})
	}

	if(req.url === '/index.html'){
		let d = getHtmlData('./views/index.html');
		d.then((data) => {
			res.write(data);
			res.end();
		})
	}else if(req.url === '/customs.html'){
		getHtmlData('./views/customs.html')
	}


***思考***：通过观看上面的代码，发现一个弊端，如果要访问页面，我们需要将所有的页面全部都通过fs.readFile来和页面做一个映射，这样不理想；		