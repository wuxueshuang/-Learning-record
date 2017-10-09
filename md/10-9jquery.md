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
	*	
		    <script>
	    		$(function (){    				
					let box = document.getElementById('box');
					$(box).click(function (){
						alert(1)	
					});
					let jqBox = $('#box');
					// onclick  拿到原生的元素  使用下标取到原生的元素
					console.log(jqBox[0]);  // 通过检索匹配jQuery对象得到对应的DOM元素
					console.log( jqBox.get(0) ); 
					$('div').get(0).css('background','red')   
	    			})
		    </script>
			<body>
				<div id="box">123</div>
			</body>

*	原生的转化成JQ对象:在获取的原生元素上添加$();
*	.eq(index)

 * 概述：获取指定下标的元素的jq对象形式；获取当前链式操作中第N个jQuery对象，返回jQuery对象，当参数大于等于0时为正向选取，比如0代表第一个，1代表第二个。当参数为负数时为反向选取，比如-1为倒数第一个，具体可以看以下示例。
类似的有get(index),不过get(index)返回的是DOM对象。
