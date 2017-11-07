let http = require("http");
let fs = require("fs");
// console.log(http);

let app = http.createServer((req,res)=>{
	console.log("有请求来了");

	// request对象，保留的是请求的信息
	// reponse对象，保留的是响应的一些方法
	// console.log(req);
	// console.log(res);

	//请求的是一个index.html页面，去读取index.html这个页面的内容，发送给客户端

	console.log(req.url);//拿到地址栏的路径

	/*if(req.url === "/index.html"){
		//返回的是index.html，需要读取index.html内容发送
		fs.readFile('./views/index.html',(error,data)=>{
			if(error){
				console.log(error);
			}else{
				console.log(data);//data是一个buffer格式的数据
				console.log(data.toString());//转成我们能看懂的格式。如果不写参数，默认是utf-8，也就是我们看到的html结构
			}   console.log(data.toString('utf-8'));
			res.write(data);//向客户响应信息
			res.end();//明确说明，响应结束

		})
	}else if(req.url === "/customs.html"){
		//返回的是index.html，需要读取index.html内容发送
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
	}*/
	/*if(req.url === "/index.html"){
		getHtmlData('./views/index.html',function(data){
			console.log(data);
			res.write(data);
			res.end();
		})
	}else if(req.url === "/customs.html"){
		getHtmlData('./views/customs.html',function(data){
			console.log(data);
			res.write(data);
			res.end();
		})
	}*/
	
	if(req.url === '/index.html'){
		let d = getHtmlData('./views/index.html');
		d.then((data) => {
			res.write(data);
			res.end();
		})
	}else if(req.url === '/customs.html'){
		getHtmlData('./views/customs.html')
	}


})


/*function getHtmlData(filePath,callback){//错误前置的原则
	fs.readFile(filePath,(error,data)=>{
		if(error){
			console.log(error);
		}else{
			callback(data);
		}
	})
}*/


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

async function getHtmlData(filePath,callback){//错误前置的原则
	return await readFilePromise(filePath);
}


app.listen(3000,()=>{
	console.log("服务启动了");
})