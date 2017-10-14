var  list = $("ul");
//getTime ();
 showTime();
//思路分解：
//1.获取时间：
function getTime (){
	var time = new Date();
	var h = time.getHours();
	var min = time.getMinutes();
	var s = time.getSeconds();
	h=h<10?"0"+h:h;
	min=min<10?"0"+min:min;
	s=s<10?"0"+s:s;
	return ""+h+min+s;
	console.log(""+h+":"+min+":"+s);
}

getTime ();
//显示时间：
 function showTime(){
 	var divs = $("#list div");
 	var t = getTime();//声明一个变量用来存获取的时间；
 	
	for(var i=0;i<t.length;i++){
		tab(divs[i],t.charAt(i));
	}
 }
//制作动画效果；
function tab(element,num){
	if(!element.time) element.time=num; 
	var	imgs =element.querySelectorAll("img");
	//console.log(imgs); 
	imgs[0].src = 'images/'+element.time+'.png';
	imgs[1].src = 'images/'+num+'.png';
	if(element.time!=num){
		mTween(element,"top",-80,500,"linear",function(){
			imgs[0].src='images/'+num+'.png';
			element.style.top = "0px";
		})
		element.time=num;
	}
}
setInterval( function(){
	showTime();
},1000);


