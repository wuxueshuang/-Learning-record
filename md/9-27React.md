##React初解
**概念**
> react：用于构建用户界面的 JAVASCRIPT 库，目前已经升级到了16.0.0版本；

**开发环境：**
> 在**本地**操作我们需要下载3个js文件；
> 
> 		react.development.js    核心代码
> 		react-dom.development.js  渲染DOM
> 		babel.min.js
 		
***babel.min.js***使用详解：

> *	通常情况下，我们在html中编写js代码时在body标签结束标签的上边插入一个<script></script>标签，默认情况下这个标签，不填写任何属性
> *	如果要运行这个script标签中的js代码，我们除了默认的情况下，也可以在这个script标签中写上type属性，
> 
> 	 	<script type="text/javascript"></scsript>
> *	当我们在这个script标签中写入type="text/babel"时，表示这个script标签归babel这个库管理，转成浏览器可执行的代码；
> 
> 		<script type="text/babel"><script>
> 
##react创建标签
> *	语法：
> 	*	创建标签：**创建的标签为虚拟标签，在放入html中浏览器会在渲染成DOM元素**
> 	
> 			React.createElement(
> 				标签名字,
> 				给标签添加的属性,
> 				标签的内容
> 			)
> 	*	将标签放入html结构中：
> 		
> 			ReactDOM.render(
> 				h2,//要放入的内容或者创建的虚拟标签名，注意只能有一个根元素，这点和Vue一样
> 				document.getElementById('box')//box为要放入的标签元素
> 			)
 			
> *创建标签小例子：*

> 			<div id="box">
> 				<!-- <h2>
> 					<span>hello</span>
> 				</h2-->
> 			</div>
> 			<script src="./src/react.development.js"></script>
> 			<script src="./src/react-dom.development.js"></script>
> 				let h2 = React.createElement('h2',{className: 'red'}, "hello");	
> 				ReactDOM.render(
> 					h2,
> 					document.getElementById('box')
> 				)
>*需要注意的是：使用createElement如果遇到复杂的结构，需要写很多，更加易读易写的形式就是写成html结构，那么怎样来处理呢？*
这时候JSX 闪亮登场：
##JSX
>###定义:
>JSX, 一种 JavaScript 的语法扩展,在js中直接写xml结构。

>jsx = javascript + xml 
>jsx保存结构的形式：可以保存在变量中，也可以保存在数组中；
>
>使用JSX时必须要引入babel.min.js，在运行的js代码中添加属性type="text/babel";

>		div id="box">
			<!--<h2>Hello,World!</h2>-->
		</div>
		<script type="text/babel">
			let html = 
			<div>
				<h2>Hello,World!</h2>
				<ul>
					<li>123</li>
					<li>123</li>
					<li>123</li>
					<li>123</li>
					<li>
						<a href="javascript:;">百度</a>
						<img src = "./img/3.jpg"/>
					</li>
				</ul>
			</div>;
			ReactDOM.render(
				html,
				document.getElementById("box")
			)
		</script>
##react--for循环
>一个ul列表，根据list：[1,2,3,4,5];生成每个li结构，li的内容为list的每一项；

>react中使用for循环的时候要拼接结构，根据item生成的< li>< /li>一定要写上**key="index"**,表示这个**元素唯一**的;

**for循环小例子**

> 1.在HTML 页面中添加一个 id="box" 的< div >;
> 
> 2.script标签中代码：
> 
> 	let arr = [1,2,3,4,5,6,7];
> 	let html = 
> 		<ul>
> 			{
> 				list.map(function(item,index){
> 					return <li key={item}>{item}</li>
> 				})
> 			}
> 		</ul>
> 	ReactDOM.render(
> 		html,
> 		document.getAlementById("box")	
> 	)
	
**react中的插值**：

>单大括号的形式;**{}**
	
	let title="Hello,World!";
	<h2 title={title}>{title}</h2>
###react--组件

>*	**定义组件**：
>
>	使用 ES6 class 来定义一个组件:

>		class List extends React.Component{
			render(){
				return (
					<ul>
						<li>123</li>
						<li>123</li>
						<li>123</li>
						<li>123</li>
					</ul>
				)
			}
		}
*		**使用组件**：

>		ReactDOM.render(
			<List></List>,
			document.getAlementById("box")	
		)

>***自定义标签和组件区分***

> *	自定义标签字母小写;
> *	组件首字母大写(构造函数);

>**React-component组件：动态渲染数据**，

>定义组件时，这个构造函数中有一个props,根据不同的数据渲染组件；在组件添加到html页面时，传入要渲染的数据；props中就会接收这个传过来的参数；定义组件时的数据是引用组件时动态渲染的，在定义这个组件的时候里面的数据要用**{this.props.(传过来的参数)}**来渲染

> 	div id="box">
		<!--<h2>Hello,World!</h2>
			<ul>
				<li>123</li>
				<li>123</li>
				<li>123</li>
				<li>123</li>
			</ul>-->
	</div>
	<script type="text/babel">
		let title1 = 'Hello,World!'
        let list1 = [1,2,3,4]
        let title2 = '123'
        let list2 = ["a","b"]		
		class List extends React.Component{
			render(){
				<ul>
					{
						this.props.customs.map(function(item,index){
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			}
		}
		class Hello extends React.Component{
			render(){
				return (
					<div>
						<h2></h2>
						<List customs={this.props.title||'Hello'}></List>
					</div>
				)
			}
		}
		ReactDOM.render(
			<div>
				<Hello title={title1} list={list1}></Hello>
          		<Hello title={title2} list={list2}></Hello>
			</div>,
			document.getElementById("box")
		);

>当组件渲染不同对象中的数据的时候，变成了这个样子：
其余的代码都不需要改变，只改变渲染调用组件传参时候的形式：

>	    let obj1 = {
		title:"Hello,World!",
		list:[1,2,3,4],
		a:1,
		b:3
	}
	let obj2 = {
		title:"66666",
		list:["Apple","Orange","Peach"]
	}
	class List extends React.Component{
		render(){
			return (
				<ul>
					{
						this.props.customs.map(function(item,index){
							return <li key={index}>{item}</li>
						})
					}
				</ul>
			)
		}
	}
	class Hello extends React.Component {
        render () {
          // this => 当前组件的实例
          console.log(this.props);  // 是一个对象，渲染传过来的参数会放在这个对象上
          return (
            <div>
                <h2>
                  <span>{this.props.title || 'hello'}</span>
                </h2>
                <List abc={this.props.list} />
            </div>
          )
        }
      }
	ReactDOM.render(
		<div>
			<Hello {...obj1}></Hello>
			<Hello {...obj2}></Hello>
		</div>,
		document.getElementById("box")
	)
**扩展运算符，将对象中的每一项展开，key值为变量名，value值为变量的值，构造函数的this.props中会接收这个对象扩展后的内容**

##React--if
在原生的标签中，给我们提供了可选的属性，比如input 标签的type属性，如果为"text",则显示为输入框，type为"button",显示的为按钮；
在我们自己创建标签的时候也可以为使用者提供类似的功能；
这个时候在创建标签的时候需要这样写：

	class Btn extends React.Component{//创建一个为Btn的组件，这个组件只是创建了一个标签；
		render(){
			let title = '提交';
			let style ={width:'100px',height:'60px',background:'#ccc',borderRadius:'10%'};
			let html =  <div style={style}></div>;
			if(this.props.type==="text"){//如果使用组件是设置的type为text则显示的为一个文本输入框
				html = <input type="text" />
			}else if(this.props.type==="btn"){//如果使用组件时设置的type属性为"btn",则显示的为按钮；
				html = <button style={style}></button>
			}
			return html;//如果使用这个标签的时候不规定type属性，则为默认的样式，默认为一个div标签；
		}
	}
	ReactDOM.render(
		<Btn type='btn' title="按钮"></Btn>,
		document.getElementById("box")
	);
##React--事件绑定

*	在原生的html标签中绑定事件用onclick,

*	在React创建的虚拟DOM中绑定事件要用驼峰命名法:onClick = {this.fn.bind(this)}
*	**函数定义时的this并没有指向创建出来的实例，this打印出来是underfined,如果想要this指   向调用的组件也就是实例，需要在函数调用的时候手动的更改this指向"bind（this）"**

* 组件的状态存放到this.state中，this.state是一个对象，存放组件用到的数据，当更改组件的数据时，需要通过**setState**来更改；
	
	    changeColor(){
			this.setState(
				{
					color:'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')',
					val:"Welcome"+Math.random()
				}
			);
		}
功能：点击按钮更改按钮的背景颜色：

	<script type="text/babel">
		class Btn extends React.Component{
			constructor(props){
				super(props);
				this.state = {//将数据存放到this.state中；
					color:'rgb(255,0,0)'
				}
			}
			changeColor(){
				this.setState(
					{
						color:'rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')',
						val:"Welcome"+Math.random()
					}
				);
			}
			render(){
				let val = this.state.val;
				let style = {background:this.state.color};
				return (					
					<button style={style} onClick = {this.changeColor.bind(this)}>change</button>
				)
			}
		}
		ReactDOM.render(
			<Btn></Btn>,
			document.getElementById("box")
		);
	</script>