var box = $(".box")[0];
var len=20;
for(var i=0;i<len;i++){
	box.innerHTML += '<div style="left:'+(i*60)+'px;"></div>';
}
var divs = $("div",box);
var n = 0;
box.timer = null;
var isClick = true;
document.onclick = function(){
	if(!box.timer){
		box.timer = setInterval(function(){
			var target = 550;
			mTween(divs[n],"top",target,1000,"linear");
			n++;
			if(n===len){
				n=0;
				clearInterval(box.timer);
				setTimeout(function(){				
					var n1 = 0;
					box.timer = setInterval(function(){
						var target = 0;
						mTween(divs[n1],"top",target,500,"linear");
						n1++;
						if(n1===len){
							n1=0;
							clearInterval(box.timer);
							box.timer = null;
						}
					},100)
				},800);				
			}
		},100)		
	}
}


