#jQ整体写法

	// 兼容模块的规范

	(function (global,factory){

		// 兼容各种规范的

		if(typeof module.exports === 'object'){
			module.exports = factory;
		}else{
			factory(global)
		}
		
		
	})(window,function (global){
		// 20000行代码 ....
		let jq = function (){
				
		}	

		jq.prototype =  {

		}
	});


##jQ原理剖析
> 1. 使用new来调用构造函数 customs
> 2. 不让开发者自己手动的new
> 3. 调用函数在内部已经new好了实例
> 4. new的时候不能自己调用自己
> 5. 定义另一个函数作为构造函数 init
> 6. 方法都是放在customs这个函数的原型上，所以需要把init的原型改写为customs的原型
> 	方便去找customs原型上的方法
> 
> 		(function(){
> 			let customs = function (){
> 				//console.log('customs');
> 				//return new customs();//使用new 调用构造函数，会造成死循环；所以用一个init函数来替代customs这个构造函数；
> 				//return new init();
> 				return new customs.fn.init();
> 			}
> 			let init = function (){//将init作为构造函数使用；
> 				//console.log('init');
> 			}
> 			//3.将init则这个构造函数的原型指向customs的原型
> 			customs.fn = customs.prototype;
> 			init.prototype = customs.prototype;
> 			customs.fn.init = init;
> 			window.customs = window._ = customs;//将customs这个构造函数暴露出来；
> 		})()
> 		
> 		//window.customs();
> 		let a = _();
> 		console.log(a);
###小知识：匿名函数自执行

**(function(){})()**

如果其他地方要调用这个匿名函数中的一些方法，或者函数，
有两种方法：

**方法一：**需要手动的在这个匿名函数中return外部用到的方法，或者函数。还可以return一个对象，对象的key值就是函数名，value值就是函数，然后将这个匿名函数用一个变量接收，外部使用的时候就可以使用**变量.key**调用了；

	let a = (function (){
		let Miaov = function (){
			console.log(123);	
		}
	
		return {
			Miaov
		}	
	})();
	
	a.Miaov()

**方法2**
将外部要用到的方法挂在到window这个全局对象上，挂载在window上的方法调用的时候可以省略window：eg：window.Number()可以写成Number();

	(function (){
		let Miaov = function (){
			console.log(123);	
		}

		window.Miaov = Miaov;//将函数挂载在window上
		window.$ = Miaov;	//给函数取了一个别名
	})();

	$();//外部调用，直接省略window；
	
##API测试

###.append(content)

> 父级.append(子级)

>* 作用：向每个匹配的元素内部追加内容。
>
>* 参数：content:
>
>  *	html结构eg:<span>hello</span>

>      		$(".xiaoshuo").append("<span>hello</span>")
>
	* jq对象eg:$("<span>hello</span>")
>           $(".xiaoshuo").append($("<span>hello</span>"))
	* 原生元素<h2></h2>
###.appendTo()
> 子级.appendTo(父级)
> 
### .prepend()
> 向每个匹配的元素内部前置内容。
###.after()
**(被插入元素).After(插入元素)** 

**(插入元素).insertAfter(被插入元素)** 
>在每个匹配的元素之后插入内容。

功能：每个p标签后面插入一个a
HTML 代码:

> 	<div class="xiaoshuo">
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
	</div>
jQ代码：

>	  
>	      $('p').after(`<a href="">X</a>`)
###.before()
**(被插入元素).before(插入元素)** 

**(插入元素).insertbefore(被插入元素)** 
>在每个匹配的元素之前插入内容。
功能：每个p标签前面插入一个a

>HTML 代码:

> 	<div class="xiaoshuo">
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
	</div>
jQ代码：

>	  
>	      $('p').before(`<a href="">X</a>`)

###.wrap()
>把所有匹配的元素用其他元素的结构化标记包裹起来。
>
功能：每个p标签外面包裹一个div
>
HTML 代码:

> 	<div class="xiaoshuo">
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
		<p>山丘</p>
	</div>
jQ代码：

>	  
>	      $('p').wrap(`<a href="">X</a>`)

###.unwrap()
>这个方法将移出元素的父元素。这能快速取消 .wrap()方法的效果。匹配的元素（以及他们的同辈元素）会在DOM结构上替换他们的父元素。
>
>
>功能：每个p标签外面的li去掉

>HTML 代码:

> 	<div class="xiaoshuo">
		<li><p>山丘</p></li>
		<li><p>山丘</p></li>
	</div>
jQ代码：

>	  
>	     $('p').unwrap("li")
###.empty()
>删除匹配的元素集合中所有的子节点。
>功能：每个.xaoshou里的内容清空
HTML 代码:

> 	<div class="xiaoshuo">
		<li><p>山丘</p></li>
		<li><p>山丘</p></li>
	</div>
jQ代码：

>	  
>	    $('.xiaoshou').empty()
###.clone();
>* 作用：
>  * 克隆匹配的DOM元素并且选中这些克隆的副本。


>  * 在想把DOM文档中元素的副本添加到其他位置时这个函数非常有用。
>* 参数	 true/false		
> 	*	1:一个布尔值（true 或者 false）指示事件处理函数是否会被复制。

>	 *  2:一个布尔值，指示是否对事件处理程序和克隆的元素的所有子元素的数据应该被复制。或者是在这个被克隆元素身上缓存的数据，data();

> 			原生的cloneNode();
			true 代表克隆元素下的子集
			false 代表不克隆子集，默认为false；
###. end()
>* 作用： 回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。
>
>eg:

> 		$('#active').css('background','red').text('miaov').attr('miaov','ketang').siblings('.yellow')//如果仍然想要操作$("#active")需要使用.end()
> 		
> 		$('#active').css('background','red').text('miaov').attr('miaov','ketang').siblings('.yellow').end().attr('abc',1)//继续给$("#active")添加属性

###.nodeValue()
>操作文本节点内容文本节点内容
>功能：获取到p标签的内容
HTML 代码:

> 	<div class="xiaoshuo">
		hello,
		<p>123</p>
	</div>
jQ代码：

>	  
>	     let childs = $('.xiaoshuo')[0].childNodes;

>		 console.log(childs[0].nodeValue.trim());

###.parent()
>* 作用
>
>  * 获取元素的父级

>  * 获取到所有匹配到元素，放在一个集合中
>  
>* 参数
>  * 选择器

###.parents([expr])
> * 作用
>
>  * 取得一个包含着所有匹配元素的祖先元素的元素集合（不包含根元素）。可以通过一个可选的表达式进行筛选。
>  * 获取这个元素的所有的祖先节点找到想要的，不传参，就是所有的祖先节点

###.siblings()
>*  作用：
>  * 取得一个包含匹配的元素集合中每一个元素的所有唯一同辈元素的元素集合。可以用可选的表达式进行筛选。
###.prev()
>*  作用：
>  * 取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。


>   * 可以用一个可选的表达式进行筛选。只有紧邻的同辈元素会被匹配到，而不是前面所有的同辈元素。


###.prevAll()
>*  作用：
>  * 查找当前元素之前所有的同辈元素


>   * 可以用表达式过滤。
###.next()
>*  作用：
>  * 取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。


>   * 这个函数只返回后面那个紧邻的同辈元素，而不是后面所有的同辈元素。可以用一个可选的表达式进行筛选。

###.nextAll()
>*  作用：
>  * 查找当前元素之后所有的同辈元素。

>   * 可以用表达式过滤。
HTML 代码:

>	            <div class="xiaoshuo">
					<p>山丘</p>
					<p>山丘</p>
					<p class="active">山丘</p>
					<p class="yellow">山丘</p>
					<p>山丘</p>
					<div>123</div>
					<div>123</div>
					<div class="yellow">123</div>
					<div>123</div>
					<div>123</div>
				</div>
jQ代码：

>         	$('.active').siblings()//找到.active所有的兄弟元素
			$('.active').siblings('.yellow').css('background',"red");

			$('.active').prevAll().css('background',"red");
			$('.active').prev().css('background',"red");
			$('.active').nextAll('div').css('background',"red");
###.val()
>* 作用：
>  * 获得匹配元素的当前值。
>  * 获取 value值的
   * 设置  写上参数
###.html()
>* 作用：
>  * 取得第一个匹配元素的html内容。这个函数不能用于XML文档。但可以用于XHTML文档。
>  * 获取 innerHTML
   * 设置  写上参数

###.text()
>* 作用：
>  * 取得所有匹配元素的内容。


>  * 结果是由所有匹配元素包含的文本内容组合起来的文本。这个方法对HTML和XML文档都有效。
					不带结构 纯文本


##.is()
> 根据选择器、DOM元素或 jQuery 对象来检测匹配元素集合，如果其中至少有一个元素符合这个给定的表达式就返回true。


> 如果没有元素符合，或者表达式无效，都返回'false'。 '''注意：'''在jQuery 1.3中才对所有表达式提供了支持。在先前版本中，如果提供了复杂的表达式，比如层级选择器（比如 + , ~ 和 > ），始终会返回true

>is 用来做判断
>html

>         <div>
			<div class="active"></div>
		</div>
		<div></div>
		<div></div>
>jQ代码：
>             
>            // 找到那些包含input为text的div
			$(document).click(function (){
				// 获取正在运动的元素
				//$("div:animated").css('background','blue');
				// 获取没有运动的元素
				//$("div:not(':animated')").css('background','blue');


>				//console.log($('div:first').is(':animated'));

>				//console.log($(".active").parent().is("body"));
			})

###.has()
> 保留包含特定后代的元素，去掉那些不含有指定后代的元素。


>.has()方法将会从给定的jQuery对象中重新创建一组匹配的对象。提供的选择器会一一测试原先那些对象的后代，含有匹配后代的对象将得以保留。
>html   
>          
>         <div id="active"><p>123</p></div>
		<div><p>123</p></div>
		<div><p>123</p></div>
		<div><a href="">baidu </a></div>
> jQ代码：
> 
>             $(document).click(function (){
> 				// 一个元素指定是否包含另一个元素
> 
> 				// 一堆div中后代包含a标签的
> 				console.log($("div").has('a'));
> 
> 				// 不要直接获取后判断有没有获取到元素 length
> 
> 				if( $("div").has('a').length ){
> 					console.log(123);
> 				}
> 
> 			})


###.off()
> .off([type,listener])
> 
> type 事件类型
> 
> listener 监听器
> 
> 
> 不写参数 会取消掉元素所有事件的监听器（函数）
> 
> 写了type  就会取消这个type对应的所有的监听器（函数）
> 
> 写了type和listener 就会取消这个type对应的listener这个监听器（函数）
> jQ代码
>
>       $(document).mouseover(function (){
			console.log('mouseover');		
		})
		$(document).click(function (){
			console.log('click');		
		})
		$(document).click(function (){
			console.log('click');		
		})
		function fn(){
			console.log('click');		
		}
		$(document).click(fn)
		$(document).mouseout(function (){
			console.log('mouseout');		
		})

>		//$(document).off('click');
		$(document).off('click');


###.offset()
> 获取匹配元素在当前视口的相对偏移

>.offset().left
>
>.offset().top

###.position()
> 获取到元素相对于父级的偏移量，相当于原生中的offsetLeft,offsetTop
> 
> .position().left
>
>.position().top

>html
>
>         <div class="boxPosition">
			<div class="box2"></div>
		</div>
> css
>
>     .boxPosition {
			width: 500px;
			height: 500px;
			border: 1px solid #000;
			position: relative;
		}
		.box2 {
			width: 100px;
			height: 100px;
			background: red;
			position: absolute;
			left: 100px	;
			top: 0;
		}  
>jQ代码

>      console.log( $('.box2').offset().left );//109
	 console.log( $('.box2').position().left );//100

###.trigger()
> 自定义事件

>      $("input").on('click_customs',(function(){//系统中并没有给我们提供click_customs这个事件；点击时注册一个click123事件
> 				console.log('123');
> 			}))
> 
> 			$("input").click(function(){
 				$("input").trigger('click_customs')//点击的时候发布一个自定义事件click_customs
 			})

>再举个栗子：
>
>       $("p").click( function (event, a, b) {
		  // 一个普通的点击事件时，a和b是undefined类型
		  // 如果用下面的语句触发，那么a指向"foo",而b指向"bar"
		} ).trigger("click", ["foo", "bar"]);
##jQ重写数据筛选
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Document</title>
			<style type="text/css">
				body {
					font-size: 14px;
					font-family: "Lantinghei SC Extralight",Arial;
				}
				ul {
					padding: 0;
					margin: 0;
					list-style: none;
				}
				a {
					text-decoration: none;
				}
				img {
					vertical-align: top;
				}
				#wrap {
					width: 760px;
					height: 260px;
					margin: 100px auto;
					padding: 145px 120px 95px;
					background: url(img/bg.jpg) no-repeat 0 0;
				}
				#section {
					width: 760px;
					height: 260px;
					-moz-box-shadow: 0px 0px 4px rgba(0,0,0,.2); 
					box-shadow: 0px 0px 4px rgba(0,0,0,.2);
				}
				#choose {
					width: 760px;
					height: 50px;
					margin: 0 auto;
					background: url(img/nav_bg.png) no-repeat 0 0;
					line-height: 50px;
					text-indent: 21px;
				}
				#type {
					width: 100%;
					height: 210px;
					background: url(img/type_bg.png) no-repeat 0 0;
					padding: 17px 0 16px 28px;
				}
				#type li {
					height: 44px;
					color: #8a8a8a;
					line-height: 44px;
				}
				#type a {
					margin: 0 12px 0 11px;
					color: #000;
				}
				#choose mark {
					position: relative;
					display: inline-block;
					height: 24px;
					line-height: 24px;
					border: 1px solid #28a5c4;
					color: #28a5c4;
					margin: 12px 5px 0;
					background: none;
					padding: 0 30px 0 6px;
					text-indent: 0;
				}
				#choose mark a {
					position: absolute;
					top: 3px;
					right: 2px;
					display: inline-block;
					width: 18px;
					height: 18px;
					background: #28a5c4;
					color: #fff;
					line-height: 18px;
					font-size: 16px;
					text-align: center;
				}
			
				.yellow {
					background: yellow;
				}
		
			</style>
		</head>
		<body>
			<div id="wrap">
				<section id="section">
					<nav id="choose">
					你的选择:
					<!-- <mark>小米<a href="javascript:;" index="0">x</a></mark> -->
					</nav>
					<ul id="type">
						<li>
							品牌：
							<a href="javascript:;">苹果</a>
							<a href="javascript:;">小米</a>
							<a href="javascript:;">锤子</a>
							<a href="javascript:;">魅族</a>
							<a href="javascript:;">华为</a>
							<a href="javascript:;">三星</a>
							<a href="javascript:;">OPPO</a>
							<a href="javascript:;">vivo</a>
							<a href="javascript:;">乐视</a>
							<a href="javascript:;">360</a>
							<a href="javascript:;">中兴</a>
							<a href="javascript:;">索尼</a>
						</li>
						<li>
							尺寸：
							<a href="javascript:;">3.0英寸以下</a>
							<a href="javascript:;">3.0-3.9英寸</a>
							<a href="javascript:;">4.0-4.5英寸</a>
							<a href="javascript:;">4.6-4.9英寸</a>
							<a href="javascript:;">5.0-5.5英寸</a>
							<a href="javascript:;">6.0英寸以上</a>
						</li>
						<li>
							系统：
							<a href="javascript:;">安卓 ( Android )</a>
							<a href="javascript:;">苹果 ( IOS )</a>
							<a href="javascript:;">微软 ( WindowsPhone )</a>
							<a href="javascript:;">无</a>
							<a href="javascript:;">其他</a>
						</li>
						<li>
							网络：
							<a href="javascript:;">联通3G</a>
							<a href="javascript:;">双卡单4G</a>
							<a href="javascript:;">双卡双4G</a>
							<a href="javascript:;">联通4G</a>
							<a href="javascript:;">电信4G</a>
							<a href="javascript:;">移动4G</a>
						</li>
					</ul>
				</section>
			</div>
			
			<script src="../../src/jquery-3.2.1.js"></script>
			<script>
				//转换思想：
				/*
					需求：
						1；点击每个a的时候点击的a添加背景，其余的不添加；
							利用事件委托写：点击每个a的时候给同级的所有兄弟元素移出class。点击的a添加class；
						2.点击a的时候上方choose标签内显示选择的内容，是有顺序的;
							考虑用对象的方式存数据；点击的时候将点击a所在的li的下标作为key值，点击的内容作为value
		
				*/
				let obj = {};
				let lis = $("#type li");
				lis.on("click","a",function(){
					$(this).addClass("yellow");//给点击的这个a添加class，
					$(this).siblings(".yellow").removeClass("yellow");//同级的兄弟元素中有class的移出
					let pLi = $(this).parent();//点击的a所在的li
					let index = pLi.index();//找到当前点击的li的下标
					obj[index] = $(this).text();
					console.log(obj);
					//渲染选择栏的内容：
					$('#choose').html('你的选择:');//每次点击之前将选择蓝的内容先清空；
					for( var i = 0; i < lis.length; i++ ){
						if(obj[i]){
							let h = `<mark>${obj[i]}<a href="javascript:;" index = ${i}>x</a></mark>`;
							$("#choose").append(h);
						}
					}			
				})
				let delA = $("#choose").find("a");
				$("#choose").on("click","a",function(){
					$(this).parent().remove();//删除结构
					let index = $(this).attr("index");
					console.log(index);
					lis.eq(index).find('.yellow').removeClass("yellow");//通过index找到点击a所在的li，再找到li里有class名的a，给a移出class，取消背景色
					delete obj[index];//删除数据
				})
				console.log(delA);
				//遇见的坑，把事件放到每个删除按钮A上下标会混乱；要利用事件委托写；
				/*delA.click(function(){
					$(this).parent().remove();//删除结构
					let index = $(this).attr("index");
					console.log(index);
					lis.eq(index).find('.yellow').removeClass("yellow");//通过index找到点击a所在的li，再找到li里有class名的a，给a移出class，取消背景色
					delete obj[index];//删除数据
				});*/
			</script>
		</body>
		</html>
##jQ之拖拽

html

	<div id = "box1">div1</div>
	<div id = "box2">div2</div>

css
	div{
		width:100px;
		height:100px;
		background:red;
		position:absolute;
		top:0;
		left:0;
		text-align:center;
		font-size:50px;
	}
	#box2{
		left:100px;
		background:yellow;
	}
js

	//原生方法面向对象
	class Drag{
		DragInit(dragBox){//init中的参数，接收的是拖拽的元素
			this.dragBox = dragBox;
			this.dragBox.onmousedown = this.downFn.bind(this);
		}
		downFn(ev){
			this.disX = ev.clientX - this.dragBox.offsetLeft;
			this.disY = ev.clientY - this.dragBox.offsetTop;
			document.onmousemove = this.moveFn.bind(this);
			document.onmouseup= this.upFn.bind(this);
		}
		moveFn(ev){
			this.dragBox.style.left = ev.clientX - this.disX + "px";
			this.dragBox.style.top = ev.clientY - this.disY + "px";
		}
		upFn(){
			document.onmousemove = document.onmouseup = null;
		}
	}
	//jQ代码
	class Drag {
		constructor(dragBox){
			this.dragBox = dragBox;
			this.DragInit();//启动（运动函数的总入口）
		}
		DragInit(){				
			this.dragBox.onmousedown = this.downFn.bind(this);				
		}
		downFn(ev){
			console.log(111)
			this.disX = ev.clientX - $(this.dragBox).offset().left;
			this.disY = ev.clientY - $(this.dragBox).offset().top;
			//console.log(this.disX,this.disY);
			//调用bind之后会返回新的函数，把这个函数挂在在实力上；
			//目的是在取消的时候可以取消这个新的函数；因为返回的这个新函数才是真正的事件处理函数；
			this.bindMove = this.moveFn.bind(this);
			this.bindUp = this.upFn.bind(this);

			//发布一个事件 custom-down

			$(document).mousemove(this.bindMove);
			$(document).mouseup(this.bindUp)
		}
		moveFn(ev){
			console.log(ev.clientX - this.disX);
			$(this.dragBox).css('left',ev.clientX - this.disX );
			$(this.dragBox).css('top',ev.clientY - this.disY );
		}
		upFn(){
			//$(document).off('mousemove mouseup')
			$(document).off('mousemove',this.bindMove)
			$(document).off('mouseup',this.bindUp)
		}
	}
##jQ轮播图无缝滚动
 
html

	<div class="slide">
		<div  class="tagClient">
			<ul class="list">
				<li><img src="./ads/1.png" /></li> 
				<li><img src="./ads/2.png" /></li> 
				<!--<li><img src="./ads/3.png" /></li> 
				<li><img src="./ads/4.png" /></li> 
				<li><img src="./ads/5.png" /></li>-->
				<!--<li><img src="./ads/1.png" /></li>-->
			</ul>
		</div>
		<div class="prev"></div>
		<div class="next"></div>
		<div class="nav">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>

jQ代码

	/*
	无缝滚动；
	两张img切换，
	点击next按钮：
			list是从右往左运动，第一个img存的是第二个img的内容，第二个img存的内容永远是新的；
			实现过程：
				1.第二个img的内容改成新的。
				2.从右往左运动.
				3.将list拉回原来的位置，left为0；
				4.将第一个img的内容改为第二个img的内容；
	点击prev按钮：	
			list是从左向右移动的；第二个img存的是第一个img的内容，第一个img存的是新的内容，
			实现过程：
				1.将list拉到左边负一个图片的位置，即-530px;
				2.第二个img的内容改为第一个img的内容，第一个img改为新的内容，
				3.将list的位置拉回0；
	*/
			let imgArr = ["./ads/1.png","./ads/2.png","./ads/3.png","./ads/4.png","./ads/5.png"];			
			let w = $(".list li").eq(0).width();//获取list下第一个li的宽度，也就是一张图片的宽度
			let  spans = $(".nav span");
			spans.eq(0).addClass("blue");
			let n = 0;
			let len = imgArr.length;
			let imgs = $(".list img");
			$(".next").click(function(){
				if($(".list").is(":animated")){
					return;
				}
				n++;	
				if(n>len-1){
					n=0;
				}

				imgs[1].src = imgArr[n];	
				spans.eq(n-1).removeClass("blue")
				spans.eq(n).addClass("blue");		
				$(".list").animate({
					left:-w
				},300,function(){
					$(".list").animate({
					left:0
				},10)
					imgs[0].src = imgs[1].src;
				})
			});

			$(".prev").click(function(){
				if($(".list").is(":animated")){
					return;
				}
				n--;
				if(n < 0){
					n = len-1;
				}
				console.log(n);
				spans.eq(n === len - 1 ? 0 : n+1).removeClass('blue');
				spans.eq(n).addClass("blue");
				$(".list").css("left",-w);//list先到-530的位置，然后向右做运动；
				imgs[1].src = imgs[0].src;
				imgs[0].src = imgArr[n];
				$(".list").animate({
					left:0
				},300)

			})

###.extend()
>语法：
>
>       jQuery.extend([deep], target, object1, [objectN])
>作用：
>       用一个或多个其他对象来扩展一个对象，返回被扩展的对象。 原生中用**assign**

##jQ插件封装

	插件封装其实就是封装一个方法，在jQuery函数，和jQuery的原型上挂载这个方法；通常我们把这个方法放在对象里，将这个对象通过exend去和jQuery或者jQuery构造函数合并；
	;(function($){

		//定义一个类，用来做拖拽，在做拖拽的过程中不做具体的内容；把使用权交给使用者；
		class Drag {
			constructor(dragBox){
				this.dragBox = dragBox;
				this.DragInit();
			}
			DragInit(){	
				//console.log(123);			
				this.dragBox.mousedown(this.downFn.bind(this))		
			}
			downFn(ev){
				console.log(111)
				this.disX = ev.clientX - $(this.dragBox).offset().left;
				this.disY = ev.clientY - $(this.dragBox).offset().top;
				//console.log(this.disX,this.disY);
				//调用bind之后会返回新的函数，把这个函数挂在在实力上；
				//目的是在取消的时候可以取消这个新的函数；因为返回的这个新函数才是真正的事件处理函数；
				this.bindMove = this.moveFn.bind(this);
				this.bindUp = this.upFn.bind(this);

				//发布一个事件 custom-down

				$(document).mousemove(this.bindMove);
				$(document).mouseup(this.bindUp);
			}
			moveFn(ev){
				console.log(ev.clientX - this.disX);
				$(this.dragBox).css('left',ev.clientX - this.disX );
				$(this.dragBox).css('top',ev.clientY - this.disY );
			}
			upFn(){
				//$(document).off('mousemove mouseup')
				$(document).off('mousemove',this.bindMove)
				$(document).off('mouseup',this.bindUp)
			}
		}
		$.fn.extend({
			drag(){
				console.log(this);  // 指向调用drag的jq对象

				new Drag(this)
			}
		})
		/*$.fn.extend({
			drag(){
				return new Drag(this);
			}
		})*/
	})(jQuery);
	let t = $("#box1").drag();