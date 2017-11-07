var list = $(".list")[0];
var lis = $("li",list);
var titles = $(".title");
var n = 0;
function tab(){
	n++;
	var target = -380*n;
	mTween(list,"left",target,500,"linear",function(){
		if(n==lis.length-1){
			list.style.left="0px";
			n=0;
		}
		mTween(titles[n],"bottom",0,300,"linear",function(){
			setTimeout(function(){
				mTween(titles[n],"bottom",-69,300,"linear");
			},1500)
		})
		
	});
}
var timer = null;
mTween(titles[n],"bottom",0,300,"linear",function(){
	setTimeout(function(){
		mTween(titles[n],"bottom",-69,300,"linear");
	},1500)
})
timer = setInterval(tab,4000);