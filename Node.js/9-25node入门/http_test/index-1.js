let http = require("http");
// console.log(http);

let app = http.createServer((req,res)=>{
	console.log("有请求来了");

	// request对象，保留的是请求的信息
	// reponse对象，保留的是响应的一些方法
	// console.log(req);
	// console.log(res);
	res.write("ok");//向客户响应信息
	res.end();//明确说明，响应结束
})

app.listen(8080,()=>{
	console.log("服务启动了");
})