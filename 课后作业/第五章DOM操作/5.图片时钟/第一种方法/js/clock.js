var  lis = $("#list li");
var imgs = $("#list .top");
var imgs2 = $("#list .bottom");
console.log(imgs2);

console.log(imgs);
//var arr = ["images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png","images/9.png","images/0.png"];
var oldTime = '';
funcDate();

function funcDate(){
	// 每次定时器执行这个函数，创建的这个日期对象就是最新时间
	var d = new Date();
	var time = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());

	// 对比oldTime和time每一个字符，哪一个字符发生了变化，运动
	if(oldTime =="") oldTime=time;
	for( var i = 0; i < time.length; i++ ){

		if(time.charAt(i) === ':'){
			lis[i].getElementsByTagName("img")[0].src = './images/mm.png';	
			// 匿名函数自执行
			(function(n){
				setTimeout(function (){
					lis[n].getElementsByTagName("img")[0].src = './images/hh.png';	
				},500)
			})(i)
		}else{
			// 判断oldTime[i]和time[i],哪一个不同
			imgs[i].src = "./images/"+oldTime.charAt(i)+".png";
			imgs2[i].src = "./images/"+time.charAt(i)+".png";			
		}
	}
	for(var i=0;i<time.length;i++){

		if(oldTime.charAt(i) !== time.charAt(i)){
			mTween(lis[i],"top",-80,500,"linear",function(element){

				var imgs=element.getElementsByTagName("img");
				imgs[0].src=imgs[1].src;
				element.style.top = "0px";

			});
		
		}
	}

	oldTime = time;
}

setInterval(funcDate,1000);	
