class CustomEvents {
	constructor (){
		this.trigger = {};//记录触发事件的方式和触发后执行的函数;触发方式为key,value为数组，存放要执行的函数;
	}
	//订阅：触发方式：
	order(mode,runFn){//订阅 事件触发的模式，和要执行的函数；
		if(!this.trigger[mode]){//如果对象中没有这个触发方式对应的值；说明不存在；给this.trigger添加属性,值为空的数组。;
			this.trigger[mode] = [];
		}
		this.trigger[mode].push(runFn);//如果这个触发方式存在了，将要执行的函数push到对应的数组中;
	}

	//取消订阅：
	remove(modeName,runFn){
		let arr = this.trigger[modeName];//通过触发方式的名字得到要取消的函数的集合;
		for( var i = 0; i < arr.length; i++ ){
			if(arr[i] == runFn){//如果要执行的函数集合中与要取消的函数相同，将这个函数从arr中删除；
				arr.splice(i,1);
			}
		}
	}			

	//发布：执行对应得函数
	publish(modeName){
		let arr = this.trigger[modeName];//通过触发方式的名字得到要执行的函数的集合;
		if(arr){
			for(var i = 0; i < arr.length; i++){
				arr[i]();//循环这个函数的集合，执行里面的函数;
			}
		}
		
	}
}
