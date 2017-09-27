##package.json
命令行中敲击：npm init 后再文件夹中生成一个package.json文件；

**其中**

> *	1.dependencies字段
> 	*	安装模块时使用  --save
> 	*	安装的模块的依赖会保存在这个字段中，  
> 	*	dependencies依赖模块最后上线的时候需要
> 	*	这是**生产环境**
> *	2.devDependencies字段
> 	*	安装时使用--save-dev
> 	*	devDependencies最后不上线   eg:vue-cli
> 	*	一般方的是工具模块
> 	*	**开发环境**
> *	3.scripts字段：
> 	*	npm的命令脚本
> 	*	定义格式：
>       *   key:value形式 	
> 		*	"key":"要运行js文件"
> 	*	运行时候命令：
> 		*	npm run [key]   
> 		*	"dev": "node build/dev-server.js",
> 			*	此时，要运行这个文件就可以写成：npm run dev;
> 			*	同时也可以写成node 的形式：node dev-server.js
> 
**package.json**文件

    {
	  "name": "9-26",
	  "version": "1.0.0",
	  "description": "",
	  "main": "app.js",
	  "scripts": {//npm命令脚本
	    "test": "echo \"Error: no test specified\" && exit 1"
		"dev": "node build/dev-server.js",//此时，要运行这个文件就可以写成：npm run dev
	  },
	  "author": "",
	  "license": "ISC",
	  "dependencies": {
	    "body-parser": "^1.18.2",
	    "express": "^4.15.5",
	    "multer": "^1.3.0",
	    "swig": "^1.4.2"
	  }
	}

#express
---------------------------

###express工作流程：
> **1.加载express模块：**
> 
> 	const express = require('express');  // expres是一个函数
> **2.express实例化,得到一个对象：**
> 
> 	const app = express(); 
> **3.客户端请求数据，后端做的事情：**
> 	
> 	app.get("/",(req,res)=>{
> 		console.log("有请求来了");
> 		// res.sendFile('file:///E:/wamp/www/9-26/views/index.html');
> 		res.sendFile(__dirname+'/views/index.html');
> 	})
>**4.监听端口：**
> **app.listen(port[,host,callback])**
> 	
> 	let host = 'localhost';
> 	let port = '3000';
> 	app.listen(port,host,()=>{
> 		console.log('http://'+host+':'+port);
> 	});


###1.路由
>let app = express();
>express是一个函数，将函数执行一下，返回一个对象，在这个对象身上有很多方法;
>
>方法：**app.method(path,callback);**
>
>语法**解释**：
> **app**：由express（）函数执行后得到的对象；
> 
> **method**：方法：有get和post两种形式;
> 
> **path**：路径;
> 
> **callback**:回调函数，即当路径匹配时执行的函数。
> 
>  * callback中参数：
>     *   req
>         * 存放的请求信息
>         * req.query文件路径后面的内容
>         * req.url访问的文件的路径   
>     *   res
>         * res.send()//后端向客户端发送数据
>         * res.sendFile();//括号中要填写向客户端发送文件的绝对路径
>         * __ dirname：express给我们预留了一个参数：__ dirname:代表当前执行文件的绝对路径，
>         * res.redirect();重定向
>         
				app.get('/personal',(req,res)=>{
					if(true){//没有登录
						res.redirect('/login');//重定向到login登录页
					}else{//如果登录了向客户端发送personal这个页面的数据
						res.sendFile(__dirname + '/views/personal.html');
					}
				});
>         
>     例：采用get方式访问根路径时，服务端检测到做出回应，返回一个页面的数据；
	>     app.get("/",(req,res)=>{
			console.log("有请求来了");
			// res.sendFile('file:///E:/wamp/www/9-26/views/index.html');//必须要写成绝对路径，但是如果访问的是很多文件，每个文件都要写‘file:///E:/wamp/www/9-26’等的这些路径，express给我们预留了一个参数：____dirname:代表当前执行文件的绝对路径，根据这个绝对路径，我们在来写能访问到的文件的路径
			res.sendFile(__dirname+'/views/index.html');
         })
###2.中间件
[http://www.expressjs.com.cn/guide/using-middleware.html](http://www.expressjs.com.cn/guide/using-middleware.html "中间件")
>中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处于请求-响应循环流程中的中间件，一般被命名为 **next** 的变量。
>
>**中间件的功能**包括：
>
> * 执行任何代码。
> * 修改请求和响应对象。
> * 终结请求-响应循环。
> * 调用堆栈中的下一个中间件。

>如果当前中间件没有终结请求,那么需要手动的调用一下next()将控制权交给下一个中间件，否则请求就会挂起.
>
>**中间件使用**：
>
>* 中间件绑定到 app 对象
>
>
> >     app.use(function(req,res,next){
		console.log("我触发了");
		next();//如果不写这个代码，代码就不会向下执行了；
	})
	app.get("/",(req,res)=>{
		console.log("有请求来了");
		// res.sendFile('file:///E:/wamp/www/9-26/views/index.html');
		res.sendFile(__dirname+'/views/index.html');
	});

###3.静态文件设置
[http://www.expressjs.com.cn/starter/static-files.html](http://www.expressjs.com.cn/starter/static-files.html "静态文件设置")

* **语法**：express.static(root, [options])
* **解释**：express.static 是 Express 内置的唯一一个中间件。是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。

>   **例子**：
>      
>      //在app.js中声明：
>      app.use(express.static('./public'));//将静态文件存放在public文件夹下;
> //在index.html中引入这些静态的css和js文件时：
>  
>       <script src="/js/jquery-3.2.1.js"></script>//此时会去public文件夹下诏js文件夹下的相应名字的js文件;这个public文件可以放在任何可以找到的位置，不必要放在app.js这个文件的文件下;
	  <script src="/js/app.js"></script>




###4.服务端的模板引擎
>* 安装模块：
>
>   >     npm i swig  --save
>   
* 加载swig模块

>   >     let swig = require("swig");
	
> * 告诉express，用模板引擎；
> 
>   >     app.set("views","./abc");//设置模板存放的位置，在abc这个文件下
    /*
	app.set():
		参数：
			viwes：固定的参数
			./abc：设置模板存放的位置，在abc这个文件下
    */

> * 定义模板引擎引用swig.renderFile这个函数渲染，同时后缀名为html;
>   >      app.engine("html",swig.renderFile);

>* 注册模板引擎，abc目录下的一html为后缀的模板都用swig.renderFile渲染
>   >     app.set("view engine","html");
>   
>* 发送给客户之前，需要使用模板引擎去处理
>  
>         app.get("/",(req,res)=>{
			//发送给客户之前，需要使用模板引擎去处理
			res.render('index',{
				user:user,
				list:[1,2,3,4]
			});
	    })

###5.get和post数据请求处理
**html**结构：

		<!DOCTYPE html>
		<html lang="zh-cn">
			<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		        <title></title>
				<style>
					#btn,#btn2{
						width:150px;
						height:50px;
						font-size:20px;
					}
				</style>
				<script src="/js/jquery-3.2.1.js"></script>
				<script src="/js/app.js"></script>
				<script>
					
				</script>
			</head>
		
			<body>			
				<input type="button" value="get获取数据" id="btn"/>
				<input type="button" value="post获取数据" id="btn2"/>
				
				<script>
					$("#btn").click(function(){
						//发送请求：
						$.ajax({
							url:"/api/users?random="+Math.random()+"&userName=leo",
							method:"get",
							success(data){
								//后端发送的是json格式，jq会帮我们占城对象的形式
								console.log(typeof data);
								console.log(data);
							}
						});
					});
		
					$("#btn2").click(function(){
						$.ajax({
							url:"/api/post-users",
							method:"post",
							data:{
			                  usersName:"Lily",
			                },
							success(data){
								console.log(data);
							}
						});
					});
				</script>
			</body>
		</html>
**app.js**

	let express = require("express");//引入express模块

	let app = express();//express是一个函数，将函数执行一下，返回一个对象，在这个对象下面有很多方法：

	const bodyParser = require("body-parser");
	
	//-------------------解析post配置-----------------
	// for parsing application/json
	app.use(bodyParser.json());  // 客户端发送过来的json格式

	// for parsing application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({ extended: true }));
 
	//将请求的接口配置放到了api文件夹下，在api文件夹下建立了一个users.js文件来配置这些接口及返回的数据
	const userApi = require("./api/users.js");//将api文件夹下的接口文件引入进来;
	app.use('/api',userApi);//中间件

**api**文件夹中的**users.js**

		const express = require("express");//引入express模块
		const router = express.Router();//调用express.Router方法
		
		//  /api/users
		router.get("/users",(req,res)=>{
			//获取到get请求的数据
		
			console.log(req.query);//{random:'0.9779',userName:'leo'}
		
			let {random,userName} = req.query;//解构赋值
			console.log(random);
			console.log(userName);
			res.send({
				code:0,
				message:"数据请求成功"
			});
		});
		
		
		// /api/post-users
		router.post("/post-users",(req,res)=>{
			console.log(req.body);//{userName:"Lily"}
			let {userName} = req.body;
			res.send({
				code:0,
				message:"ok"
			});
		});
		
		module.exports = router;


###6.上传文件：
*	安装上传文件模块：
   *	nom i multer --save
*  上传文件js代码模板：

        const multer  = require('multer');//加载处理上传的模块
		var storage = multer.diskStorage({
		  destination: function (req, file, cb) {
		    cb(null, __dirname+'/uploads/'); // 设置存储的位置
		  },
		  filename: function (req, file, cb) {
		    cb(null, file.originalname); // 存储文件的名字
		  }
		})
		var upload = multer({ storage }); // 指定上传的信息
		// APi用来做上传的
		app.post('/upload',upload.single('miaov'), (req, res) => {
			res.send('上传ok')
		})
	
					
