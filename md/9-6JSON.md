JSON
----------------------------
###1.json是一个**字符串**
>从后端响应的数据，流行的数据格式是json数据格式，是一个字符串，是json字符串。

>详见：官网：http://json.org/
>
###2.JOSN字符串的两种格式：


>**1.名/值：**
>
>      '{
		"key1":"value1",
		"key2":"value2"
	  }'

> key值必须写双引号、值是任意类型、不能是函数，如果后台接收到的是一个函数，函数会执行，
> 
> 这可能影响后台的数据；

>**2.值得有序列表**：'[ ]';
>
> '["value1","value2","value3"]'
> 
> 值不能是函数


###3.JSON的方法：
**1.JSON.parse(json对象)**
>
> 作用：
> 
>* json字符串转成可操作的对象
	    //JSON是字符串
		let json = '{"username":"leo","age":30}';
		//需要将json字符串转成可操作的对象； 
		//json->对象

		//JSON 全局的对象，专门用来处理JSON数据格式的


		let obj = JSON.parse(json);
		console.log(obj);//obj{usename:"leo",age:30}//此时的obj是一个对象;

**2.JSON.stringify(对象);**
>作用：
>
>*  把对象转成json字符串；

	//要向后端发送数据
		let obj2  = {username:"leo",age:20};


	//把对象转成json字符串；
	//stringify 最后一个参数，是格式化的缩进的空格数量，最大是10
	let str = JSON.stringify(obj2，null,1);
	console.log(str);