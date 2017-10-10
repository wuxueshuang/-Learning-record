#jquery

###$(callback)
**原生** **window.onload**  页面中所有的资源（css，js，图片）加载完成之后 触发

**jquery** **$(callback)**  页面的文档（标签）加载完成后触发，比原生的快也可以使用**$(document).ready（function(){}）**

	<script src="../jquery-3.2.0.js"></script>
	<script>
		window.onload = function (){
			console.log('window.onload');	
		}
	
		$(function (){
			console.log("$");		
		})
		$(document).ready(function (){
			console.log('ready');	
		})
		//此时控制台中依次打出： $ ready window.onload
	</script>

	<body>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507525481937&di=53f2aac91da494ae275988e1b606c3a7&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F3801213fb80e7beca9004ec5252eb9389b506b38.jpg">
		<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507525490489&di=40e7c960e3e8e3b914e8fc30e4074b9b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D0a0eda45c9cec3fd9f33af36bee1be4a%2Ffd039245d688d43f3488b67b771ed21b0ef43b11.jpg">
	</body>
    
##jq中方法
**原型上的方法**，是**实例**的方法，必须使用 **$()** 调用：比如所有事件方法都不带on，官网中，.addClass()属于原型方法

**静态方法** 挂载在函数身上的方法就是静态方法；在jq中，就是挂载在$这个函数上的方法；使用时**$.方法()**；
##jq对象与原生方法获取元素之间的转换
*	jq对象：使用jq获取到的元素都叫做jq对象；
*	JQ对象转化成原生的标签元素:
	
	*	在获取的jq对象后用下标的方式取出来，eg:**$('li')[0]**;
	*	在获取的jq对象后使用.get（下标）取出来；eg:**$('div').get(0)**
	
> 		<script>
> 			$(function (){				
> 					let box = document.getElementById('box');					
> 					let jqBox = $('#box');
> 					//onclick  拿到原生的元素  使用下标取到原生的元素
> 					console.log(jqBox[0]);  // 通过检索匹配jQuery对象得到对应的DOM元素
> 					console.log( jqBox.get(0) ); 
> 					$('div').get(0).css('background','red')   
> 			})
> 		</script>
> 			<body>
> 				<div id="box">123</div>
> 			</body>


*	原生的转化成JQ对象:在获取的原生元素上添加$();
*	.eq(index)

 * 概述：获取指定下标的元素的jq对象形式；获取当前链式操作中第N个jQuery对象，返回jQuery对象，当参数大于等于0时为正向选取，比如0代表第一个，1代表第二个。当参数为负数时为反向选取，比如-1为倒数第一个，具体可以看以下示例。
类似的有get(index),不过get(index)返回的是DOM对象。
##jq中的API
###.eq(index)
> 获取指定下标的元素的jq对象形式
###.css
> .css()  读取的是计算后的样式
> 
		读
			.css(属性)  width height
		写
			.css(属性,值)//设置一个属性
			.css({//设置多个属性
				属性1:值1，
				属性2:值2
			})


	<script>
		$(function (){
			// $('div').get(0).css('background','red')

			 $('div').eq(1).css('background','red')
			 $('div').eq(-2).css('background','red')

			 $('div').eq(1).css({
			 	width: 100,
			 	height: 200,
			 	fontSize: 50
			 })

			 console.log($('div').eq(1).css('backgroundColor'));
			 console.log($('div').eq(1).css('width'));
			 console.log($('div').eq(1).css('height'));

		})
	</script>
	<body>
		<div>123</div>
		<div>123</div>
		<div>123</div>
		<div>123</div>
	</body>
##.attr()
> 给元素在行间设置属性，相当于原生js中的setAttribute();
> 
>       读
		  attr(key)
	   写
			attr(key,value)
		<script>
			$(function (){
				
				$('div').attr('custom', 'miaov');

				console.log($('div').attr('custom'));  // 只能获取一个，默认获取第一个

				$('div').removeAttr('custom', 'miaov');

			})

		</script>
		<body>
			<div>123</div>
			<div>123</div>
			<div>123</div>
			<div>123</div>
		</body>
##.data()
> 概述：在元素上存放或读取数据,返回jQuery对象。

	.data()//在行间不显示；与原生的添加自定义属性一样
		读：
			data(key)
		写：
			data(key,value)
		删除属性：
			removeData()

>

	在原生的js中：
		let box = document.getElementById('box');  // 获取元素返回一个对象

		box.index = 1;  // 在获取的对象上添加了自定义属性，不会显示在行间中；

		console.log(box);
	在jq中：
		$(function (){
			let box = $('#box');
			box.attr('index',123);//会显示在行间中；

			// 存数据，不会写在行间
			box.data('miaov', 'ketang');
			box.removeData('miaov')；//删除自定义属性
			console.log(box.data('miaov'));//取值：
		})

## 做循环的：.each   
> 语法： each(callback)

**原生中：**

	arr.forEach(function(item,index){//注意回调函数中接收参数的顺序：item，index
		
	})

**jq中：**

	$("li").each(function (index,item){//与原生的forEach区分开，原生的回调函数的参数是：item，index。jq中正好相反
		// this => 循环的原生的元素	
	})
	
##.find(选择器)
> 找到元素的指定选择器的子孙（后代元素）元素

	<script>
		$(function (){
			//$('.active li')
			let active = $('.active');	
			console.log(active.find('.abc'));//找到ul中class名为abc的li	
		})
	</script>

	<body>

		<ul class="active">
			<li>123</li>
			<li class="abc">123</li>
			<li>123</li>
			<li>123</li>
			<li>123</li>
		</ul>
	</body>

##.on()
> 语法：on('事件名',事件处理函数)
> 完整语法：on(events,[selector],[data],fn)//其中，中括号内的为可选参数；selector是选择器，也可以理解为条件，只有符合这个条件的元素才会添加对应的事件；data是在执行事件对象中传递的参数，在事件函数中用ev.data来接收；

	<script>
		$(function (){
			// 不能给事件处理函数传递参数，因为这个函数不是开发者调用的
			/*document.onclick  = function (){
					
			}*/
			//原生中，给一个元素添加多个事件处理函数用addEventLisenner，在jq中用on就可以了；同时可以给同一个元素绑定多个触发方式的事件函数：
			$(document).on('click mouseover mouseout',function (ev){
				console.log(ev.type)//事件触发类型
				if(ev.type === 'click'){

				}else if(){

				}
			})
			
			// 在文档中有class为active的元素，包括这个active元素包含是的子孙元素才能触发这个事件处理函数，其余的都不行
			/*$(document).on('click','.active',{a:1},function (ev){
				console.log(ev.data);//给执行的事件函数传递的参数
			})
			$(document).on('mouseover','.active',{a:1},function (ev){
				console.log('over');
			})*/

			$(document).mouseover(function (){
				console.log('over1');
			})
			function fn2(){
				console.log('over2');
			}
			$(document).mouseover(fn2)
			$(document).mouseover(function (){
				console.log('over3');
			})

			//$(document).off();  // 不传参：去掉匹配的元素所有事件的事件处理函数
			//$(document).off('mouseover');  // 去掉指定事件的事件处理函数
			$(document).off('mouseover',fn2);//去掉移出事件中的fn2函数；

		})

	</script>
	<body>
		<input type="button" value="按钮" class="active" />
		<input type="button" value="按钮" />
		<input type="button" value="按钮" />
		<input type="button" value="按钮" />
		<ul class="active">
			<li>123</li>
			<li>123</li>
			<li>123</li>
			<li>123</li>
			<li>123</li>
		</ul>
	</body>
##.off()
>语法：off(events,[selector],[fn])

	$(document).off();  // 去掉匹配的元素所有事件的事件处理函数
	$(document).off('mouseover');  // 去掉指定事件的事件处理函数
	$(document).off('mouseover',fn2);//去掉移出事件中的fn2函数；
##.prop()
> 使用.attr()获取不到的属性；获取元素后的属性；eg: **checked disabled**

	<script>
		$(function (){
			// 属性选择器
			console.log($('input[type="button"]'));
			let checkbox = $('input[type="checkbox"]')
			$('input[type="button"]').click(function 	(){
				 console.log(checkbox.attr('checked'));  // 获取的是行间中的
				 console.log(checkbox.prop('checked'));
			})

		})
	</script>
	<body>
		true
		<input type="checkbox" checked='false'  />
		<input type="button" value="获取checkbox的状态" />
	</body>
##JQ应用：选项卡操作

	选项卡思维
		1. 选择元素
			tagname classname id css3选择器
		2. 绑定事件
		3. 控制样式 class 和 style
		4. 点击按钮对用的div出现
	<body>
		<input class="red" type="button" value="按钮1"/>
		<input type="button" value="按钮2"/>
		<input type="button" value="按钮3"/>
		<input type="button" value="按钮4"/>
		<div style="display: block">DIV1</div>
		<div>DIV2</div>
		<div>DIV3</div>
		<div>DIV4</div>
		<script>
			/*$(function(){
				console.log($('input'));//使用jq的方法必须是使用jq包装过的元素
				$('input').click(function(){
					$('input').removeClass("red");
					//let i = $(this).index();//调用index这个元素在同级元素中所处的下标

					//这个元素在指定元素中的下标
					let i = $("input").index(this)//在所有input中所处的下标
					console.log(i);

					//console.log(this);//指向的是触发事件的元素，是原生的，没有经过jq包装
					$(this).addClass("red");
					$('div').css("display","none");
					$('div').eq(i).css("display","block")
				})
			});*/



			/*简写display：none；show
			$(function(){
				$('input').click(function(){
					$('input').removeClass("red");

					//这个元素在指定元素中的下标
					let i = $("input").index(this)//在所有input中所处的下标
					console.log(i);

					//console.log(this);//指向的是触发事件的元素，是原生的，没有经过jq包装
					$(this).addClass("red");
					$('div').hide();
					$('div').eq(i).show();
				})
			});*/

			/*$(function(){
				$("input").click(function(){
					console.log(this);
					$('input').removeClass("red");
					$(this).addClass('red');
					$("div").hide();
					$("div").eq($("input").index(this)).show();
				});
			})*/
			$(function(){
				$('input').each(function(index,ele){
					//console.log(this);
					$(ele).attr("index",index);//给每个元素添加属性：将下标存进去
					$(ele).click(function(){
						//点击的时候获取下标
						let i = $(this).attr("index");
						$("input").removeClass("red");
						$(this).addClass("red");
						$('div').hide();
						$("div").eq($(this).attr("index")).show();
					})
				})
			})
		</script>
	</body>


##百度音乐全选JQuery
	<div class="wrap">
		<div class="box">
			<ul class="list">
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox1"/>
				    <span class="fl">私奔</span>
					<p class="fr">梁博</p>
				</li>
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox2"/>
					<span class="fl">北京北京</span>
					<p class="fr">梁博、黄勇</p>
				</li>
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox3"/>
					<span class="fl">我爱你中国</span>
					<p class="fr">梁博</p>
				</li>
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox4"/>
					<span class="fl">花火</span>
					<p class="fr">梁博</p>
				</li>
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox5"/>
					<span class="fl">回来</span>
					<p class="fr">梁博</p>
				</li>
				<li class="item clearfix">
					<input type="checkbox" class="fl" id="checkbox6"/>
					<span class="fl">爱要有你才完美</span>
					<p class="fr">梁博</p>
				</li>
			</ul>
			<div class="bottom clearfix">				
				<div class="fl" id="alls">
					<input type="checkbox" class="fl" id="checkbox7"/>						
					<span class="all fl">全部</span>
				</div>
				<p class="fl icon1 collect">收藏</p>
				<p class="fl icon1 add">添加</p>
				<p class="fl icon1 del">删除</p>
			</div>
		</div>
	</div>
	<script>
			$(function(){
				let lis = $('.list li');//所有的li
				let checkedAll = $('#checkbox7');//全选按钮
				let inputs = $(".list input");
				//实现隔行变色功能
				$(".list li:even").css('background','#fff');
				$(".list li:odd").css('background',"pink");
				let arr = ['#fff','pink'];
				//鼠标移入
				lis.mouseenter(function(){
						//console.log($(this).index());当前操作的li的下标
						//lis.eq($(this).index()).css('background','yellow');
						$(this).css('background','yellow');
					})
					.mouseleave(function(){
						//lis.eq($(this).index()).css('background','red');
						//$(this).css('background','red');
						//离开时判断单选按钮是否被勾选
						let input = $(this).find('input');//找到当前li里的单选按钮
						if(!$(input).prop("checked")){
							$(this).css('background',arr[$(this).index()%2]);
						}
						
					})
				//点击全选
				checkedAll.click(function(){
					//console.log($(this).prop('checked'));
					let checked = $(this).prop('checked');//全选按钮的选中状态
					//console.log(inputs);
					inputs.prop('checked',checked);//所有单选按钮的选中状态与全选按钮保持一致
					if(checked){//如果全选按钮被勾选了，所有的li背景都变为选中的黄色
						lis.css('background','yellow');
					}else{//如果全选按钮没有被勾选，那么所有的li实现隔行变色的效果
						$(".list li:even").css('background','#fff');
						$(".list li:odd").css('background',"pink");
					}
				})

				//点击单选按钮
				inputs.click(function(){
					let uncheckedLi = inputs.toArray().find(function(item){//将所有的单选按钮里没有被选中的找出来，如果没有返回undefined;
						return item.checked===false;

					});
					//console.log(uncheckedLi);
					checkedAll.prop('checked',!uncheckedLi);//设置状态的时候根据有没有不被选中的单选按钮取布尔值来设置全选按钮的状态
				})
			});
		</script>