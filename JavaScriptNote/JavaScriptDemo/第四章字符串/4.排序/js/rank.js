var showBox = document.getElementsByClassName("show-box")[0];
console.log(showBox);
var arr = [1,2,3,4,5,6,7,8];
function render(data){
	for(var i=0;i<data.length;i++){
		showBox.innerHTML += `<img src = "images/${data[i]}.png" style="left:${i%4*210}px;top:${Math.floor(i/4)*223}px;"/>`;
	}
}
render(arr);
var inputs = document.getElementsByTagName("input");
var state = false;
inputs[0].onclick = function(){
	if(!state){		
		this.value = "从大到小";
		arr = arr.sort(function(a,b){
			return b-a;//从小到大
		});
		render(arr);
		state = true;
		console.log(state);
	}else if(state){
		this.value = "从小到大";
		arr = arr.sort(function(a,b){
			return a-b;//从大到小
		});
		render(arr);
		state = false;
		console.log(state);
	}
}


//点击随机排序：
inputs[1].onclick = function(){
	arr = arr.sort(function(a,b){
			return Math.random() - 0.5;
		});
		render(arr);

}


















































/*var showBox = document.getElementsByClassName("show-box")[0];
console.log(showBox);
//var arr = [1,2,3,4,5,6,7,8];
var arr = ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png",];
var arr1 = [1,2,3,4,5,6,7,8];
function render(data){
	for(var i=0;i<arr1.length;i++){
		//showBox.innerHTML += `<img src = "images/${data[i]}.png" style="left:${i%4*210}px;top:${Math.floor(i/4)*223}px;"/>`;
		showBox.innerHTML += `<img src = "${data[i]}" style="left:${i%4*210}px;top:${Math.floor(i/4)*223}px;"/>`;
	}
}
render(arr);
var inputs = document.getElementsByTagName("input");
var isClcik = false;
inputs[0].onclick = function(){
	if(!isClcik){
		this.value = "从大到小";
		arr1 = arr1.sort(function(a,b){
			return b-a;//从小到大
		});
		render(arr);
		isClcik = true;
	}else if(isClcik){
		this.value = "从小到大";
		arr = arr.sort(function(a,b){
			return a-b;//从大到小
		});
		render(arr);
		isClick = false;
	}
}*/