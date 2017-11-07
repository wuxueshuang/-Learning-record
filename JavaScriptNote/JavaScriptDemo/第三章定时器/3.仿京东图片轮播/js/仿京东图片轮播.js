var showWindow = $(".showWindow")[0];
var list = $(".list")[0];
var imgs = $(".list img");
var arr = ["./images/1.png","./images/2.png","./images/3.png","./images/4.png"];
var prev = $(".prev")[0];
var next = $(".next")[0];
var n=0;
var timer = null;
function goNext(){
	n++;
	imgs[1].src = arr[n];
	if(n>=arr.length-1){
		n=0;
	}
	mTween(list,"left",-420,200,"linear",function(){
		list.style.left ="0px";
		imgs[0].src = imgs[1].src;
		
	});
	
}
timer = setInterval(goNext,1000);
showWindow.onmouseover = function(){
	clearInterval(timer);	
}
next.onclick = function(){
	goNext();
	
}
showWindow.onmouseout = function(){
	timer = setInterval(goNext,800);
	
}
prev.onclick = function(){
	n--;	
	if(n<0){
		n=arr.length-1;

	}
	list.style.left="-420px";
	imgs[1].src = imgs[0].src;
	imgs[0].src = arr[n];
	mTween(list,"left",0,-420,"linear");
}