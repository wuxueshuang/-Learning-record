##form表单

> **作用:**
> 
> 用来提交数据;
> 
> form表单中的input的name很关键，是前后端约定的字段;
> 
> **不好的地方**
> 
> 提交数据会跳转页面;
>
>form的属性:
>
>*   action :要跳转的页面
>
>*  name:表单名
>
>*  method:t提交方式

**get和post在提交方式在浏览器中的区别**

> **get:**
> 
> **1.发送数据的方式不同：** 
>
>get的方式是在地址栏中问号?的后面，
>
>key=value&key2=value2&key3=value3  称为queryString
>
> **2.浏览器对地址有限制：**
> 
>所以get的数据会有限制，
>
> **3.安全性：**
> 
>不安全，可以发送一些无关紧要的;
>
>浏览器好缓存地址;
> 
>**post:**
>
> **1.发送数据的方式不同：**
> 
>post放在HTTP请求的body(主体)发送的;
>
> **2.浏览器对地址有限制：**
> 
> 理论上没有限制;但在服务端有限制;
> 
>**3.安全性：**
> 
>相对安全

**浏览器解析**

> 当在浏览器打开html页面，浏览器有内核会把html解析并渲染（显示）网页，不是看的一堆的文本
> 
> **http协议基本功能：**
> 对url进行解析，生成HTTP请求消息；
> 
> <方法><空格><URL><空格><HTTP版本>//请求消息的第一行称为请求行；
> 
> <字段名>:<字段值>//统称为消息头
> 
> <字段名>:<字段值>//统称为消息头
> 
> <字段名>:<字段值>//统称为消息头
> 
> <字段名>:<字段值>//统称为消息头
> 
> <空行>
> 
> <消息体>//消息体
> 
> 
> 
> 	
> **请求 request**
> 
> **实例：**
> 访问：http://www.baidu.com/index.html
> 
> * 1.首先要将域名解析为对应的ip;
> 
> * 2.然后生成HTTP请求消息；
> 
> 
>         post 119.75.213.61:443 1.1.1  请求行
> 	    cookie:                              请求信息、消息
> 	    Connection:Keep-Alive
> 	    Content-Encoding:gzip
> 	
> 	    body                                请求数据 主体
> 
> **响应 response**
> 
>     1.1.1 200 ok
> 
> 	cookie:                              响应信息、消息
> 	Connection:Keep-Alive                保持连接
> 	Content-Encoding:gzip                压缩
> 	
> 	body 主体
> 	
> 	二进制的 文本
> 	<百度的index.html的页面>


**ajax**中xhr.open中的参数：

> 1.请求方式 get|post 不区分大小写
> 
> 2.发送的地址；
> 
> 3.是否异步 true 异步，false 同步
>    >**同步**
>    
>	>在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个执行将会一直等待下去，直到收到返回信息才继续执行下去
>	
>　**异步**
	
	
>    >不需要一直等下去，而是继续执行下面的操作，不管其他执行的状态。当有消息返回时系统会进行通知处理，这样可以提高执行的效率。
> 
> 

**ajax**   **get**方式应用：
> <h2>注册get-ajax</h2><br/>
		用户名：<input name = "username" id = "username"><span id = "tip"></span><br/>
		密码:<input type = "password" name = "password"><br/>
		<input type = "button" value = "提交" id = "send"><br/>

>         <script>
> 			send.onclick = function(){
> 				//发送请求：
> 				//1.得到一个ajax对象
> 				let  xhr = new XMLHttpRequest();
> 				//2.连接地址，准备好数据
> 					/*
> 						参数：
> 							1.请求方式 get|post 不区分大小写
> 							2.发送的地址；
> 							3.是否异步 true 异步，false 同步
> 					*/
> 
> 				xhr.open(
> 					'GET',
> 					'http://localhost:80/9-5/backend/php/get.php?user='+username.value,
> 					true
> 				);
> 				
> 
> 				//3.发送：
> 				xhr.send();
> 
> 				
> 				//考虑一下ajax怎么拿到响应信息的，
> 				//什么时候ajax回来了？
> 				//4.响应回来会触发onload事件
> 				xhr.onload = function(){
> 					console.log("我回来了");
> 					//回来之后响应的内容
> 					console.log("xhr.responseText");
> 					tip.innerHTML = xhr.responseText;
> 
> 				}
> 			}
> 		</script>

**ajax**   **post**方式应用：
> <h2>注册post-ajax</h2><br/>
		用户名：<input name = "username" id = "username"><span id = "tip"></span><br/>
		密码:<input type = "password" name = "password"><br/>
		<input type = "button" value = "提交" id = "send"><br/>

		<script>
			send.onclick = function(){
				//发送请求：
				//1.得到一个ajax对象
				let  xhr = new XMLHttpRequest();
				//2.连接地址，准备好数据	
				xhr.open(
					'POST',
					'http://localhost:80/9-5/backend/php/post.php?',
					true
				);			

				//3.发送：
				//设置一个请求头部：设置内同的类型：
				xhr.setRequestHeader('content-Type',
					'application/x-www-form-urlencoded'
				);
				xhr.send('user='+username.value);

				
				//考虑一下ajax怎么拿到响应信息的，
				//什么时候ajax回来了？

				//4.响应回来会触发onload事件
				xhr.onload = function(){
					console.log("我回来了");
					//回来之后响应的内容
					console.log(xhr.responseText);
					tip.innerHTML = xhr.responseText;
				}
			}
		</script>

**ajax**的**post**小知识：	
>*	enctype 属性规定在发送到服务器之前应该如何对表单数据进行编码。
>
在**form**表单中：

>    *   application/x-www-form-urlencoded //默认：
> 
>    *   text/plain 文本
>
>    *   multipart/form-data 编码为二进制的，上传文件时可用 
>      
在**ajax**中：
没有默认值，需要在发送请求的前面自己设置一下enctype；

>                 xhr.setRequestHeader('content-Type',
> 					'application/x-www-form-urlencoded'
> 				);
> 				xhr.send('user='+username.value);



**上传：**

> **form**表单上传：
> 
> 
> 	<h2>注册</h2><br/>
> 	<form 
> 		action = "http://localhost:80/9-5/backend/post_file.php" 
> 		method = "post"
> 		enctype = "multipart/form-data"
> 	>	
> 		<!--action中所填入的是:访问的上传文件的地址；-->
> 		<input type = "file" name = "file"><br/>		
> 		<input type = "submit" value = "提交" id = "send"><br/>
> 	</form>




> **ajax**上传：

> <input type = "file" name = "file" id = "upFile"/>
		<input type = "button" value = "上传" id = "btn"/>
		<div id = "box">
			<p id = "show">0%</p>
			<div id = "bar"></div>
		</div>


> 		<script>
			/*
				采用ajax写上传功能；
				点击上传按钮触发事件：
					1.获得一个ajax对象；
					2.连接地址，准备好数据;
					3.发送数据；
						找到真正要长传的文件，把文件转成二进制的;
							console.log("upFile.value");//打印出来的是文件的地址；
							真正上传的资源，放在元素的files属性中;
							console.log(upFiles.files[0]);
					4.数据全部接收后判断一下状态；
			*/
			btn.onclick = function(){
				let xhr = new XMLHttpRequest();
				xhr.open(
					"post", 
					"http://localhost/9-5/backend/post_file.php", 
					true
				);
				


> 				//监控上传进度				
				xhr.upload.onprogress = function(ev){
					//ev.loaded上传大小
					//ev.total总大小
					let scale = Math.round(ev.loaded/ev.total * 100) + "%";
					show.innerHTML = scale;
					bar.style.width = ev.loaded/ev.total * 500 + "px";
				}
				xhr.onload = function(){
					console.log(xhr.responseText);
				}
				//找到要上传的文件；
				let f = new FormData();
				f.append('file',upFile.files[0]);
> 
> 			/*
>              append 中的参数：
>              name value
>              name:input表单控件中对应的name,和后台约定好的；
>              value： 传送的文件的内容
> 			*/
				xhr.send(f);
			}
		</script>


##FormData 对象的使用
> 通过FormData对象可以组装一组用 XMLHttpRequest发送请求的键/值对。它可以更灵活方便的发送
> 
> 表单数据，因为可以独立于表单使用。如果你把表单的编码类型设置为multipart/form-data ，则
> 
> 通过FormData传输的数据格式和表单通过submit() 方法传输的数据格式相同
>
>**创建一个FormData对象**
>
>     let formData = new FormData();

> **FormData对象的使用**
> 
>     // HTML 文件类型input，由用户选择
       let f = new FormData();
	   f.append('file',upFile.files[0]);

> 
>append 中的参数：
>
>name value
>
>name:input表单控件中对应的name,和后台约定好的；
>
>value： 传送的文件的内容
> 		
> 通过调用它的append()方法添加字段

##ajax中的状态码(status);

> **xhr.status:**
> 
> 200 ok              成功访问
> 
> 304 Not Modified    重定向，意思是走的缓存
> 
> 404 Not found       报错
> 
> 502 Bad Gateway     服务器错误



##ajax工作流程
----------------------

>阶段   xhr.readystate
>
> 初始化，未发送			0	UNSENT
> 
> 准备数据，连接地址		1	OPENED
> 
> 返回响应头				2	HEADERS_RECEIVED   未返回内容，只返回了响应头
> 
> 接收数据中				3	LOADING            返回内容，数据量大，分批返回
> 
> 接收数据完毕			4	DONE               数据完全接受完成


##原生的ajax封装：
<h2>注册get-ajax</h2>
用户名：<input type="text" name="user" id="username" /><span id="tip"></span>
<br/>
邮箱：<input type="text" name="email" id="email" />
<br/>
密码：<input type="password" name="password" /><br/>
<input type="button" id="send" value="提交">
		
		<script>
			//封装函数模拟ajax请求
			/*
				//传入参数，需要讨论是：
					1.提交的访问地址;
					2.采用什么方式提交;
					3.传入的数据;
					4.访问后获取数据成功做的事情
					5.访问后获取数据失败做的事情
			*/
			function ajax(options){
				let defaults = Object.assign({
					url:"",
					method:"get",
					data:"",
					success(){},
					error(){}
				},options);
				//访问地址不能为空；需要做判断，
				if(defaults.url === ""){
					//抛出错误
					throw new Error("地址不能为空");
				}

				//1.得到一个ajax对象：
				let xhr = new XMLHttpRequest();

				//判断是get请求还是post请求
				//get请求把data放在地址的后面，post方式要把数据data放在send的参数中，
				if(defaults.method.toLowerCase()==="get"){
					defaults.url = defaults.url + "?" + defaults.data;
				}

				//2.连接地址，准备好数据
				xhr.open(
					defaults.method,
					defaults.url,
					true
				);				
				//3.发送：
				//需要判断是get还是post方式：
				if(defaults.method.toLowerCase()==="post"){
					//设置一个请求头部：设置内容的类型：
					xhr.setRequestHeader(
						"content-Type",
						'application/x-www-form-urlencoded'
					);
					xhr.send(defaults.data);
				}else if(defaults.method.toLowerCase()==="get"){
					xhr.send();
				}

				//4.数据全部接受后
				xhr.onload = function(){
					//判断一下是否成功
					if(xhr.status === 200 || xhr.status === 304){
						defaults.success(xhr.responseText);
					}else if(xhr.status === 404){
						defaults.error(xhr.status,xhr.statusText);
					}
				}
				
			}


			//get方式：
			username.onblur = function(){
				ajax(
				   {
						url:"http://localhost/9-5/backend/php/get.php",
						method:"get",
						data:`user=${username.value}`,
						success(data){
							console.log(data);
						},
						error(status,statusText){
							console.log(status,statusText);
						}
				  });
			}


			//post方式;
			email.onblur = function(){
				ajax(
					{
						url:"http://localhost:80/9-5/backend/php/post.php",
						method:"post",
						data:`user=${email.value}`,
						success(data){
							console.log(data);
						},
						error(status,statusText){
							console.log(status,statusText);
						}
					}
				);
			}
		</script>


#ajax请求：

>AJAX即“Asynchronous Javascript And XML”（异步JavaScript和XML），是指一种创建交互式
>
>网页应用的网页开发技术。

> **作用：**
> 
> 1. 发送数据和服务器进行交互
> 	
> 2. 实现异步更新，不需要刷新整个页面，只做局部更新

##原生ajax实现：

>**html**

> 	<h2>注册get-ajax</h2>
> 	用户名：<input type="text" name="user" id="username" /><span id="tip"></span>
> 	<br/>
> 	密码：<input type="password" name="password" /><br/>
> 	<input type="button" id="send" value="提交">

>**js代码**

>       send.onclick = function (){
> 		// 发送请求
> 		//1 .得到ajax对象
> 		let xhr = new XMLHttpRequest();
> 
> 		// 2. 连接地址，准备好数据
> 
> 		xhr.open(
> 			'GET',
> 			'http://localhost:8088/backend/php/get.php?user='+username.value,
> 			true
> 		);
> 
> 		// 怎么拿到响应的信息？
> 		// 什么时候ajax回来了？
> 
> 		//4. 响应回来会触发onload事件
> 		xhr.onload = function (){
> 			console.log("我回来了");
> 			// 回来之后，响应的内容 
> 			console.log( xhr.responseText );
> 				
> 			tip.innerHTML = xhr.responseText;
> 		}
> 
> 		// 3. 发送
> 		xhr.send();
> 
> 	};

##jQuery中ajax实现：
> **.流程：**
> 
> * 1.引入jQuery.js
> * 2.$ajax步骤：
> 		$ajax({
> 			url:"",
> 			method:"",
> 			success(data){//请求成功后做的事情
> 				console.log(data);
> 			},
> 			error(error){//错误信息
> 		       console.log(error);
> 		    } 
> 		})




**$ajax实现**

         $.ajax({				                							  		url:"http://192.168.2.81:8888/promise/dress",
        	success(data){
        		if(!data){
                    console.log("暂无数据");
                }else{
                    console.log(data); 
                }
        	},
        	error(error){
                console.log(error);
            } 
        });