//一个文件就是一个模块
function add (a,b){
	return a+b;
}
function isFunction(fn){
	return typeof fn === "function"
}

//暴露本模块的api,要把暴露的函数挂载在module.exports

//当使用require加载这个模块的时候，默认会返回本模块的module.exports这个对象
//module.exports对外输出的值


/*module.exports.add = add;
module.exports.isFunction = isFunction;*/
//module.exports可以被改写
module.exports = {
	add,
	isFunction
}