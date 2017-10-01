var start = $(".start")[0];//开始游戏按钮
var exit = $(".exit")[0];//退出游戏按钮
var add = $(".same")[0];//得分显示
var addSpan = $("span",add)[0];
var lost = $(".diff")[0];//失分显示
var lostSpan = $("span",lost)[0];
var img = $("#img");//掉下来的小图片
var imgBox = $(".imgBox")[0];//包含小图片的盒子；
var cont = $(".cont")[0];
var n = 0;//初始化一个变量，定时器执行时每次+1；
var addScore = 0;//得分变化值；
var lostScore = 0;//失分变化值
var gameTimer=null;
start.onclick = function game(){
    clearInterval(gameTimer);
	mTween(add,{left:-100,top:14},500,"linear");
	mTween(lost,{left:-100,top:114},500,"linear");
	mTween(start,{opacity:0},500,"linear",function(){
		start.style.display = "none";
		exit.style.display = "none";
		gameTimer = setInterval(function(){
			if(lostScore==10){
				clearInterval(gameTimer);
				mTween(add,{left:240,top:160},500,"linear");
				mTween(lost,{left:340,top:160},500,"linear");
				mTween(start,{opacity:1,
					left:190},500,"linear",function(){
					start.innerHTML = "重新开始";
					start.style.display = "block";
					exit.style.display = "block";
					
					start.onclick = function(){
						addScore = 0;//点击重新开始得分清0；
						lostScore = 0;//点击重新开始失分清0；
						addSpan.innerHTML = 0;
						lostSpan.innerHTML = 0;
						game();
					};
				},500);
				return;
			}
			autoDown();

		},2000)
	});
	
	
}

function autoDown(){
	
	n+=4;
	arr.sort(function (){
		return Math.random()  - 0.5;    
	});//打乱数组顺序
	imgBox.innerHTML = `<img src = "${arr[0].imgUrl}" id = "img"/>`;//随机更换掉下来的小图片
	var LeftAttr = Math.round( Math.random()*(678-74)) ;
	imgBox.style.left = LeftAttr+"px";//小图片落下来的水平位置随机化；
	imgBox.style.top = "-70px";//游戏开始时小图标的垂直位置；

	//小图标盒子的运动形式；从-70到330；所需时间越来越少，在外边定义变量n,函数欸执行一次，n+4;
	mTween(imgBox,{top:330},1500-n,"linear",function(){
			//盒子运动完以后，上下抖动，记录失分的变量每次+1；
		shake(cont,"top",30,function(){
			imgBox.style.top = "-70px";//盒子回到其实位置；重新下落；
		});
		lostScore++;//记录失分的变量每次+1；
		lostSpan.innerHTML = lostScore;		
	});
	imgBox.onmousedown = function(){
		
		
		clearInterval(imgBox.timer);//鼠标按下时清盒子运动的定时器；
		clearInterval(gameTimer.timer);//鼠标按下时清整体游戏的定时器
		addScore++;//记录得分的变量每次+1；
		addSpan.innerHTML = addScore;
		this.innerHTML = '<img src = "images/6.png" id = "img"/>';//更换小图片

		//小图片盒子上下抖动
		shake(imgBox,"left",30,function(){

			//抖动完成后时清盒子运动的定时器；
			clearInterval(imgBox.time);
		});		
	}
}
