#nodeJs使用

项目目录介绍
------------------------------
build ------ webpack的配置目录

config ----- 开发环境和生成环境的配置

src    -----  写vue项目的源文件，单文件组件和vue周边工具配置

static ----- 静态目录（图片 js css） 不归webpack管理

.babelrc ---- babel转换器的配置文件

.eslintigore ---- 排除检查的目录文件

.eslintrc --- 配置检查规则，可以禁用某个规则  '规则名':0





ESlint 代码风格检查
--------------------------------

src目录下
--------------
assets   静态资源的，归webpack管理

*	一般我们把整个项目的css文件夹放在这里

components 放公共的组件

*	子组件文件（.vue文件）

router 路由配置

App.vue  组件的总入口
*	将App文件引入main.js文件中，一个组件就是一个单独的.vue文件，子组件的vue文件我们同一放在components里，父组件在使用子组件时都需要引入
*	
mian.js  js的入口

**main.js文件格式**

	// The Vue build version to load with the `import` command
	// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


	import Vue from 'vue' // 引入vue文件直接写名字会在node_modules下找
	import App from './App' // 自己定义的文件，写相对路径，不然会在node_modules文件夹下找
	import router from './router'
	
	Vue.config.productionTip = false
	
	/* eslint-disable no-new *///代码风格
	new Vue({
	  el: '#app',
	  router,
	  template: '<App/>',//template  是Vue中自己固有的模板，<App />他就是App.vue，template就是选择vue实例要加载哪个模板。最新的vue-cli脚手架模板现在是这个形式。App.vue是主程序，其他所有的.vue都是放在App.vue中，所以只需要加载App.vue就完全可以把其他的东西加载出来。
	  components: { App } // 注册组件，使用组件前必须注册
	})


引入模块
------------------
import 变量名 from '模块路径'

模块路径:

* 是在node_modules下的模块 直接写模块名 （例如：import Vue from 'vue' //引入vue文件直接写名字会在node_modules下找）

* 自己定义的文件 要写相对路径（例如自己定义的header.vue,存在components文件夹中，引入时就需要写相对路径  import header from './components/header'）引入header从“相对路径”

单文件组件
------------------
一个文件就是一个组件
组件包含：

*	1. template 组件的模板
*	2. script   组件的交互
*	3. style    组件的样式

其中：template是必须的，其余的可以没有

组件中使用样式
---------------------

每一个单独的组件使用独立的样式，写在单文件的style中

统一引入css
将css文件放在assets文件夹中

vuex
---------------------
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
官网：https://vuex.vuejs.org/zh-cn/intro.html

安装vuex
npm i vuex

安装vue-devtools
https://github.com/vuejs/vue-devtools
此工具在chrome中使用，在检查元素的时候，点击vue可以看到文件中组件的嵌套关系；

##nodeJs环境中用Vue脚手架重写todolist
**分析：**

之前我们已经用原生的js和vue框架写过了，对他的功能和结构也很了解；
该页面主要按大方向说分为3个部分：

头部：新建消息部分

主体：消息显示及编辑部分

底部：统计消息部分

因此，对他的组件组成也就清晰了，第一步我们按照这三个大的方向将整个网页结构分为四个部分，
App.vue 是外面最大的组件盒子，用来包裹头部，主体和底部；

header.vue

content.vue

footer.vue

然后根据content的结构可以将content这个组件，继续拆分，content是一个ul列表，可以把单个的li拆出来，这个我们的todolist就可以由5个组件组合起来了！

下面我将一个一个的组件文件放到下面，并作注释说明：

**App.vue**

	<template>
    <section class="todoapp">
      <customs-header @new-todo="addDataFn"></customs-header>
      <customs-content 
        :st = "list" 
        v-show = "list.length"
        @removedata="removeFn"
        :all = "selectedAll"
        @selected-all = "selectedFn"
      ></customs-content>
      <customs-footer v-show = "list.length" :unSelectedNum ="unSelected"></customs-footer>          
    </section>
	</template>
	
	<script>
	import header from './components/header'//引入header.vue组件，由于我们的组件名字header和hH5中的额新标签的名字相同，为了避免Vue框架向我们抛出错误，我们有两种方法，一是：在引入的时候改名字，二是在注册组件的时候改名字；
	import content from './components/content'
	import customsFooter from './components/footer'
	import customsItem from './components/item'
	**//此处等各项功能测试都通过之后我们再看 开始**
	//如果你已经测试完下面所有的效果，那么可以将下面let声明的数据注释掉，打开本条注释中的代码就实现了数据持久化；
	let data = localStorage.getItem("angel")//进入页面开始渲染的时候获取本地存储
	//判断本地存储中是否有内容；我们的数据格式是一个数组，里面每一项都用对象的放式存；
	if(data){
	  data=JSON.parse(data)//data存在，将就送字符串转成数组
	}else{
	  data=[]//如果data不存在将data转成空数组
	}
	**//此处等各项功能测试都通过之后我们再看 结束**
	//根据已知的内容生成数据结构
	let data = [
	  { 
	    title:"明天出去玩",
	    select:false
	  },
	  {
	    title:"心情很好",
	    select:true
	  }
	];
	export default {//写到 export default这个对象中的文件相当于 Vue.component("组件名"，{template:{})中，template中的内容；
	  name: 'app',
	  data(){//这里需要注意，在结构中渲染的状态也就是结构必须要写在data中，data必须是一个函数，所有要用到的数据都要以对象的形似返回出去；与 new Vue中的data不同，new Vue中的data放在对象里；
	    return {
	      list:data
	    }
	  },
	  watch:{//观察者模式如果this.list改变就重新设置localStorage;
	    list:{
	      deep:true,
	      handler(){
	        localStorage.setItem("angel",JSON.stringify(this.list));
	      }
	    }
	  },
	  computed:{//计算属性;
	    selectedItems(){//选中的消息
	      return this.list.filter(item => item.select)
	    },
	    unSelected(){//未选中的消息数量
	      return this.list.length - this.selectedItems.length
	    },
	    selectedAll(){//判断是否全选，如果返回值为真则全选，如果为false不全选 ，将这个函数动态的绑定到全选按钮所在的组件中；在对应的组件文件中的props中接收，就可以根据这个来设置全选的点击事件效果了      
	      return this.selectedItems.length === this.list.length
	    }  
	  },
	  components:{
	    'customs-header':header,//注册子组件
	    'customs-content':content,
	    customsFooter
	  },
	  methods:{
		//添加新消息数据的函数
	    addDataFn(newData){
	      this.list.push(
	        {
	          title:newData,
	          select:false
	        } 
	      )
	    },
		//监听到 子组件content:发布的删除数据的removedata函数，做对应的事情，删除数据
	    removeFn(index){
	      this.list.splice(index,1)
	    },
		//根据content组件中发布的selected-all事件，点击全选按钮控制所有消息的选中状态
	    selectedFn(val){//接收是否全选按钮是否选中，true或false；
	      this.list.forEach(function(item){
	         item.select = val
	      })
	    }      
	  }
	}
	</script>

##content.vue
	
	<template>
	  <section class="main" >
	    <input class="toggle-all" type="checkbox"  v-model = "selectedAll">//点击全选按钮控制状态，这是一个双向绑定
	    <ul class="todo-list"> //循环数据生成结构 其中必须要写：key = "index"
	      <customsItem 
	        v-for = "item,index in st"
	        :key='index' :options = "item" 
	        :index = "index" 
	        @delItem = "delItemFn"       
	      ></customsItem>
	    </ul>
	</section>
	</template>
		
	<script>
		import customsItem from './item'// 引入子组件
		export default {
		  name: 'app',
		  props:["st",'all'],
		  components:{
		    customsItem // 接收子组件
		  },
		  computed:{
		    selectedAll:{
		      get(){//通过数据将全选按钮的状态返回出去
		        return this.all
		      },
		      set(val){//手动点击全选按钮，就是设置按钮的状态，放在set函数里；发布一个改变全选状态的函数，让父级App.vue监听
		        this.$emit("selected-all",val)
		      }
		    }
		  },
		  methods:{
		    delItemFn(index){//通过监听到item发布的delItem删除函数，向父级发布一个函数，用来通知父级删除对应的数据，以此来改变结构；
		      this.$emit("removedata",index)
		    }
		  }
		}
	</script>

##item.vue

	<template>
		  //通过添加删除class名来达到给文字添加删除线的效果
		  <li :class="{completed:options.select}" @dblclick="showEditFn">
		    <div class="view" ref= "view">
		      <input class="toggle" type="checkbox" v-model = "options.select">
		      <label>{{options.title}}</label>
		      <button class="destroy" @click = "delFn"></button>
		    </div>
		    <input 
		      class="edit" 
		      v-model = "options.title" 
		      ref= "edit"  
		      @keydown.13="sureFn"  
		      @blur="sureFn" 
		      @keydown.esc="cancel"
		    >
		  </li>
		</template>
		
		<script>
		let editBefore = ""
		let edit = ""
		export default {
		  props:["options","index"],
		  methods:{
		    delFn(){
		        // console.log(this.index)
		        this.$emit("delItem",this.index)// 发布点击删除按钮的事件
		    },
		    showEditFn(){
		      this.$refs.view.style.display = "none"// 显示块消失
		      this.$refs.edit.style.display = "block"// 编辑块展示
		      edit = this.options//edit赋值为点击对应的数据
		      editBefore=this.options.title//存储编辑前的消息内容
		    },
		    sureFn(){         
		      if(edit.title==""){
		        edit.title = editBefore
		        editBefore=""
		      }
		      this.$refs.view.style.display = "block"// 编辑块展示
		      this.$refs.edit.style.display = "none"// 编辑块消失
		    },
		    cancel(){
		      if(edit.title==""){
		        edit.title = editBefore
		        editBefore=""
		      }
		      this.$refs.view.style.display = "block"// 编辑块展示
		      this.$refs.edit.style.display = "none"// 编辑块消失
		    }
		  }
		}
		
		</script>


##footer.vue
	
	<template>
	  <footer class="footer">
	    <span class="todo-count">
	      <strong>{{unSelectedNum}}</strong>
	      <span>条未选中</span>
	    </span>
	    <!--<ul class="filters">
	      <li><a href="#/all" :class="{selected:filterHash==='all'}">全部</a></li> 
	      <li><a href="#/active" :class="{selected:filterHash==='active'}">未选中</a></li> 
	      <li><a href="#/completed" :class="{selected:filterHash==='completed'}">选中</a></li>
	    </ul>-->
	</footer>
	</template>
	
	<script>
	export default {
	  name: 'app',
	  props:["unSelectedNum"] //接收父级传来的变量，这个变量是为选中的消息数量，通过“小胡子”方法渲染到结构中
	}
	</script>




	
	




