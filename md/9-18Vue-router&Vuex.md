#vue-router
##路由
我们所要了解的是：前端路由，也就是归我们前端控制的

##vue-router:

vue-router 接收请求，分发内容


广泛应用于**单个页面**：

单个页面：

*	一个网站只有一个页面  通过一些路由库来配置路径对应的组件，当访问到这个路径的时候，就会渲染对应的组件

比如当我们点击网页上的一个按钮的时候页面内容变更了，地址栏中的网址变了，但是页面并没有刷新，网页中呈现的内容也变了；

    http://easy-mock.com/workbench//点击按钮时的网址
	http://easy-mock.com/dashboard//点击按钮时的网址

	{
		workbench：a组件
		dashboard： b组件
	}

对于vue-router我们只需要会配置，就可以了：
	
路径

组件

一个路径对应一个组件，主要配置映射关系

/ 根路径

/workbench 路径

/workbench/a/b  嵌套路径

##使用vue-router

**1.安装：**

npm i vue-router --save

**2. 引入vue-router**

import VueRouter from 'vue-router'

**3. 把vue-router作为vue的插件**

Vue.use(VueRouter)

**4.开始实例化路由**

	let router = new VueRouter({
		routes: [
			{
				path: 路径
				component: 对应的组件
			},
			{
				path: 路径
				component: 对应的组件
			}
		]
	})


**5. 需要把router注入到根实例中**

	new Vue({
		...
		// router: router
		router
	})

**6. 在app.vue中写上一对标签，是vue-router提供的**

**<router-view></router-view>**

用来告诉vue，路径匹配到的组件渲染在这个位置，路径匹配到的组件就会替换router-view这一对标签


**Vue-router两种模式**：

*	1.默认是哈希模式，也就是说通过更改哈希值来控制页面的变化；
*	2.history模式：**<router-link to="/p跳转的地址" tag="要显示的标签名"></router-link>**
	
	Vue-router中给我们提供了一个标签,这个标签在渲染结构的时候默认显示的也是a标签；


一般我们把配置vue-router的文件放到router文件夹下的index.js中；
配置vue-router我们遵循的原则：

*	1.引入vue-router文件 

		import VueRouter from 'vue-router'
*	2.把vue-router作为Vuede插件；

	    Vue.use(VueRouter)// 作为插件，用来解析router-view中的内容
*	3.将router实例化：

		let router = new VueRouter({
			routes: [
				{
					path: 路径
					component: 对应的组件
				}
			]
		})
*	4.将实例化的对象暴露出去：

		export default Router
*	5.在main.js中接收一下：//需要把router注入到根实例中

		new Vue({
		  el: '#app',
		  router:Router,
		  template: '<App/>',
		  components: { App:App } // 使用组件前必须注册
		})	

-------------------------------------------------

#Vuex

##Vuex使用：
配置Vuex 的文件通常放到store文件夹中的**index.js**中；

*	1.引入vueX：**import Vuex from 'vuex'**// 引入vueX
*	2.将Vuex实例化： 

		let store = new Vuex.Store（{

		}）
*	3.将Vuex 实例化的对象暴露出去：**export default store**
*	4.在main.js中接收
*	
		new Vue({
		  el: '#app',
		  store:store,// 将vuex实例注入进来
		  template: '<App/>',
		  components: { App } // 使用组件前必须注册
		})

##Vuex.Store 构造器选项

*	1.**state**：（数据/状态）

	*	类型: Object

	*	Vuex store 实例的根 state 对象。
*   2.**mutations**

	*	类型: { [type: string]: Function }
	*	改变state的状态/数据必须提交mutations，即在mutations中注册函数;
	*	在 store 上注册 mutation，处理函数总是接受 state 作为第一个参数（如果定义在模块中，则为模块的局部状态），payload 作为第二个参数（可选）。
	*	在**mutations**中提交的函数执行之后必须立马改变state，也就是说必须**同步**，不能使用异步的形式，不能使用定时器
*	3.**actions**
	*	类型: { [type: string]: Function }
	*	**异步**
	*	Action 类似于 mutation，不同在于：
	*	Action 提交的是 mutation，而不是直接变更状态。
	*	Action 可以包含任意异步操作。
	
	*	在 store 上注册 action。处理函数接受一个 context 对象，包含以下属性：
		
			{
			  state,     // 等同于 store.state, 若在模块中则为局部状态
			  rootState, // 等同于 store.state, 只存在于模块中
			  commit,    // 等同于 store.commit
			  dispatch,  // 等同于 store.dispatch
			  getters    // 等同于 store.getters
			}

##Vuex举例
####App.vue
	<template>
	  <div id = "app">
	    <input type="button" value="改变" @click="changeFn" />
	    {{$store.state.count}}
	  </div>
	</template>
	
	<script>
	  export default{
	    methods:{      
	      changeFn(){
	        /*// 第一种接收形式：
	        this.$store.commit('changeState',{
	          n:10,
	          m:20
	        }),
	        // 第二种接收形式
	        this.$store.commit({
	          type : 'changeState',
	          n :10
	        })*/
			 //提交异步更改state的函数
	         this.$store.dispatch(changeStateAsync)
	      } 
	    }
	  }
	</script>
####index.js
	import Vue from 'vue' // 引入vue文件直接写名字会在node_modules下找
	
	import Vuex from 'vuex'// 引入vueX
	Vue.use(Vuex)// 作为插件，整个应用要取vuex中的状态
	
	/* eslint-disable no-new */
	let store = new Vuex.Store({
	  state:{
	    count:0
	  },
	  mutations:{
	    // 提交之后必须立马改变state，必须使用同步，不能使用异步的形式，不能使用定时器   
	    changeState:function(state, obj){
	      state.count += obj.n
	      /* setTimeout(()=> {
	        state.count += obj.n //不可以这样使用，这样用的话，chrome中vue插件记录的数据状态和我们预想的不一样数据变化有延时；
	      },1000)*/
	    }
	  },
	  actions:{		
	    changeStateAsync(context){// context指的就是state
	      setTimeout(()=> {
	        context.commit('changeState',{
	          n:10
	        })
	      },1000)
	    }
	  }
	})
	export default store
	
####main.js

	import Vue from 'vue' // 引入vue文件直接写名字会在node_modules下找
	import App from './App' // 自己定义的文件，写相对路径，不然会在node_modules文件夹下找
	
	
	new Vue({
	  el: '#app',
	  store:store,// 将vuex实例注入进来
	  template: '<App/>',
	  components: { App } // 使用组件前必须注册
	})



