1.localStorage
-----------------
**1.全局的对象**

**2.对本地存储的操作**(类似于操作数据库，类似于操作DOM)   ***增***  ***删*** ***改***  ***查***

>
>**添加内容：**
>
> localStorage.setItem(key,value);
> 
> **查找内容：**
> 
> localStorage.getItem(key) || null;
> 
> **改内容：**
> 
> 给同一个key赋值
> 
> **删内容：**
> 
> localStorage.removeItem(key);
> 
> 存的是文本，如果是数组,对象,要转成字符串;
>
>设置localStorage:

>             localStorage.setItem("John",20);
> 			localStorage.setItem("Smith",22);
>
>           <input type = "button" value = "添加" id = "add"/>
>        <script>
> 			let arr = ["Mack","Lina","Tina"];
> 			console.log(arr);
> 
> 			add.onclick = function(){
> 				arr.push("David");
> 				console.log(arr);
> 				localStorage.setItem("data",arr);

>                 //将localStorage的value值设置为一个对象的形式，需要把这个对象转成字符串的形式，否则localStorage会自动将对象转成字符串，添加的内容将变成：[object Object]
> 				localStorage.setItem("data",JSON.stringify({newPerson:"Alice"}));
> 			}
> 			
> 		</script>

**localStorage小应用**

		  /*<h3>添加商品</h3>
    		<div id = "box">
    			<span>鼠标</span>
    			<span>键盘</span>
    			<span>电脑</span>
    			<span>音箱</span>
    		</div>
    		<hr/>
    		<h3>购物车</h3>
    		<ul id = "list">
    			<!--<li>鼠标</li>-->
    		</ul>*/

	    /*
			需求：
				同一个页面在两个窗口中打开，一个窗口更新数据，另一个窗口也实时更新；
			原理：
				可以把要及时更新的数据放在localStorage中，在浏览器刷新的时候不会更新；
			思路：
				对于本题的需求可以将已经点击的内容存在localStorage中;
				根据localStorage有一个特性；在向localStorage中添加内容的时候，会触发storage事件；通过这个事件可以监听localStorage的变化;
	
			步骤：
				1.页面刷新的时候先获取到localStorage的数据，渲染页面结构;
				2.点击商品的时候向localStorage添加数据；
					由于localStorage的值存的是key value的形式;
					我们约定每次点击的时候向localStorage中添加key值为“shop”，此时value中的值应该是存到一个数组中；每次刷新根据数组的内容渲染就好;
					注意，每次点击商品的时候需要在storage事件中更新一下localStorage的value值;
	  */


	       //当某个窗口中的内容改变，其他窗口的内容也跟着改变;
			window.addEventListener("storage",function(){
				//console.log("我改变了");

				//拿到localStorage中的内容渲染页面
				//console.log(localStorage.getItem("shop"));
				let data = localStorage.getItem("shop");//有值，是一个json对象；

				let dataArr = JSON.parse(data);//将json字符串转成对象：数组
				arr = dataArr;//当触发了storage说名有新数据，所以更新一下，点击添加商品的时候也是要向arr中push;用arr的数据来设置localStorage;用dataArr来渲染结构;
				
				let html = dataArr.map(function(item){
					return `<li>${item}</li>`;
				});
				list.innerHTML = html.join("");
			})

			//一进页面就渲染内容；根据localStorage渲染;

			let data = localStorage.getItem("shop");//有值，是一个json对象；
			let dataArr = [];

			//判断一下，data是否存在，如果data存在；
			if(data){
				dataArr = JSON.parse(data);//将数据转成数组，循环渲染页面；
				console.log(dataArr);
				let html = dataArr.map(function(item){
					return `<li>${item}</li>`;
				});
				console.log(html);
				list.innerHTML = html.join("");
			}
			
			let spans = box.getElementsByTagName("span");
			let arr = dataArr;
			for( var i = 0; i < spans.length; i++ ){
				spans[i].onclick = function(){
					arr.push(this.innerHTML);
					let newLi = `<li>${this.innerHTML}</li>`;
					list.innerHTML += newLi;
					localStorage.setItem("shop",JSON.stringify(arr));
				}
				
			}

2.cookie
---------------------------------------	
>
**localStorage出现的原因：**

>http是无状态的，使用cookie来记录登录状态，这个时候你在一个页面登录的，在同源的其他页面也登录了；
				
>**cookie详解**
>
> * cookie也跟域名有关系，必须是同源才拿到cookie；
> 
> * cookie的大小有限制，在几kb之间
> 
> * cookie也是有生命周期的，通常是在浏览器会话结束后就会删除；
> 
> * 但是cookie的过期时间可以自己设置；但是必须要转为UTC 世界标准时间;
> 
> 
> **要对cookie进行增删改查必须自己封装函数，系统中没有给我们提供;**	
> 
>         //存cookie:>    
		document.cookie = 'ketang=123';
		document.cookie = 'ketang2=1232';
		//存cookie:  setCookie()
			function setCookie(key,value,n){
				if(n){
					let d = new Date();
					d.setDate(d.getDate() + n);					
					document.cookie = key+'='+value+"; expires="+d.toUTCString();
				}else{
					document.cookie = key + "=" + value;
				}					
			} 
			setCookie("name1","Lily");
			setCookie("name2","Aric");
			setCookie("name","Smith",21);
> 
			//查cookie  getCookie()

> 			function getCookie(key){
				//找到cookies
				let cookies = document.cookie;
				console.log(cookies);
				cookies = cookies.split(";");//把cookie字符串按;分割成数组；
				for( var i = 0; i < cookies.length; i++ ){
					let arr = cookies[i].split("=");//在将数组里的每一项用=号隔开;
				}
			}

> 			//删cookie  removeCookie
			function removeCookie(key){
				setCookie(key,null,-1);//找到要删除key值的对应项，将过期时间设置为之前的时间
			}
			removeCookie("name1","null", -1);