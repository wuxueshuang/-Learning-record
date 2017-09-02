##1.this指向
*	函数被调用的几种情况，this分别指向什么值

**1.直接调用 this => window**

	function fn(){
		console.log(this);
	}

	fn();//window

**2.事件调用 this => 触发事件的元素**
	
	function fn(){
		console.log(this);
	}
	
	document.onclick = fn;//#document

**3.定时器调用 this => window**
	
	setInterval(function(){
		console.log(this);//window
	},1000);

**4.箭头函数被调用 this => 所定义的作用域的this**
	
	document.onclick = function(){
		setTimeout(function(){//this指向的是调用函数的元素，定时器调用指向的是window
			console.log(this);
		},1000);
		setTimeout(() =>{//箭头函数this指向的是定义时候的作用域中的this;
			console.log(this);
		},1000)
	}

**5.new 调用函数（面向对象）this => 内部创建的隐式对象**

	function Car (color,sites){
		this.colcor = color;
		this.sites = sites;		
	}
	let car1 = new Car("red","7");

**6.new调用函数 this => 内部创建的隐式对象**

	函数作为构造函数用new关键字调用时，this => new 出的对象（实例）

**7.函数作为window内置函数的回调函数调用时：this->window**

	未详解
		
**8.call，apply调用，this指向第一个参数；**

			//call就直接调用了这个函数，赋给onclick的是函数的返回值
			document.onclick = function(){
				console.log(this);
				let fn = () => {
					console.log(this);  //this => [1,2,3]
				}
				return fn;
			}.call([1,2,3]);
	
			//也就是：
			document.onclick  = fn;//打印出来的是[1,2,3];
##2.改变this指向

###方法一

> 语法：函数.call(  )；
>
>**作用：**
>
> 	    1. 直接会执行这个函数
> 
		2. 概念这个函数this的指向
> 		 	 
		3. 要给执行的函数传参数

> 
> **参数**：
> 函数.call(   参数1，参数2，参数3. . . .);
> 
> 第一个参数：函数this的值

>从第二个开始，就是给函数传的参数

###方法二
语法：函数.apply(   )
> 
> **作用** 
> 
> 1. 直接会执行这个函数
> 2. 概念这个函数this的指向
> 3. 要给执行的函数传参数
> 	
> **参数**：
> 
> 函数.call(   参数1，[参数2，参数3，参数4]. . . .);
> 
> 第一个参数：函数this的值
> 
> 如果设置了null或者undefined，函数中的this仍然指向window
> 
> 第二参数是一个数组或类数组
> 
> 数组里的每一项是给函数传入的参数
> 
> 作用和call一模一样，唯一不同的是给函数传参的形式不同

###方法三
语法：函数.bind();
	返回一个新的函数，在调用时改变函数的this指向；

	document.onclick = function(){
		setTimeout(function(){
			console.log("我执行了");
			console.log(this);//#document
		}.bind(this));
	}