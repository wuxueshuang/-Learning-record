var content = document.querySelector(".content");
var cont_1 = content.querySelectorAll(".cont_1");





var spans = content.querySelectorAll("span");
var ems = content.querySelectorAll("em");
var strongs = content.querySelectorAll("strong");
var number1 = document.querySelector(".number1");
var number2 = document.querySelector(".number2");
var number3 = document.querySelector(".number3");

function tab(){
	var m=0;//计算商品总件数，声明一个变量，初始为0；
	var d=0;//计算商品总件数，声明一个变量，初始为0；
	var w = 0;//声明一个变量，用来比较价格；求出最高单价；
	for(var i=0;i<spans.length;i++){
		//求最高单价：
		//var w = 0;//声明一个变量，用来比较价格；求出最高单价；
		if(spans[i].innerHTML!=0){
			if(parseFloat(ems[i].innerHTML)>w){
				w = parseFloat(ems[i].innerHTML);
				console.log(w);
			}
		}
		m = m+parseFloat(spans[i].innerHTML);
		d = d+parseFloat(strongs[i].innerHTML);
	}
	number1.innerHTML = m;
	number2.innerHTML = d;
	number3.innerHTML = w;
}


for(var i=0;i<cont_1.length;i++){
	getCommodityPrice(cont_1[i]);
}

function getCommodityPrice(prarent){
	var btn1 = prarent.querySelector(".btn1");
	var btn2 = prarent.querySelector(".btn2");
	var span = prarent.querySelector("span");
	var em = prarent.querySelector("em");
	var strong = prarent.querySelector("strong");
	var n = 0;
	//需求：点击btn2，span里的数字+1，strong里的数字+em里的单价；
	btn2.onclick = function(){
		n++;
		span.innerHTML = n ;
		strong.innerHTML =  Number(strong.innerHTML) +  Number(em.innerHTML);
		tab();
	}
	//需求：点击btn1，span里的数字-1，strong里的数字-em里的单价；
	btn1.onclick = function(){
		n--;
		if(n<0){
			n=0;
			return;
		}
		span.innerHTML = n ;
		strong.innerHTML = Number(strong.innerHTML)- Number(em.innerHTML);
		tab();
	}	
	
}



/*//需求：点击btn2，span里的数字+1，strong里的数字+em里的单价；
var n = 0;
btn2.onclick = function(){
	n++;
	span.innerHTML = n ;
	strong.innerHTML =  Number(strong.innerHTML) +  Number(em.innerHTML);
}
//需求：点击btn1，span里的数字-1，strong里的数字-em里的单价；
btn1.onclick = function(){
	n--;
	if(n<0){
		n===0;
		return;
	}
	span.innerHTML = n ;
	strong.innerHTML = Number(strong.innerHTML)- Number(em.innerHTML);
}*/