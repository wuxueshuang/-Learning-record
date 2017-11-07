var sames = $(".same")[0];
//console.log(sames);
/*for(var i = 0;i<sames.length;i++){
	changeImg(sames[i]);
}*/
var listTop = $(".list-top",sames)[0];
var lis = $("li",listTop);//上面的li;
var bottomContents = $(".bottom-content",sames);
//console.log(bottomContents);
var prev = 0;
var timer = null;




//循环顶部的li;
var n = -1;
timer = setInterval(auto,1200)
function auto(){
	n++;
	if(n==lis.length){
		n=0;
	}
	clearInterval(timer2)
	lis[prev].className = "";
	bottomContents[prev].style.zIndex = "-999";	
	lis[n].className = "active";
	bottomContents[n].style.zIndex = "999";
	prev = n;

	var timer2 = null;
	var newList = $(".newList",sames)[prev];

	var lisNews = $("li",newList);
	var h3s = $("h3",newList);		
	var ps = $("p",newList);
	var prevLiNew = 0;//记录上一次移入的新闻列表li的下标
	var m = -1;
	timer2 = setInterval(function(){
		console.log("我进来了");
		

		m++;
		if(m>=lisNews.length){
			clearInterval(timer2);
			m=0;
		}

		h3s[prevLiNew].style.color = "";
		ps[prevLiNew].style.color = "";
		lisNews[prevLiNew].style.background = "";
		
		h3s[m].style.color = "#fff";
		ps[m].style.color = "yellow";
		lisNews[m].style.background = "#ffb746";
		prevLiNew = m;
		},300);

}





































/*function auto(a,b,c){
	c++;
	if(c==a.length){
		c=0;
	}
	a[b].className = "";
	bottomContents[b].style.zIndex = "-999";	
	a[c].className = "active";
	bottomContents[c].style.zIndex = "999";
	b = c;


	var newList = $(".newList",sames)[b];

	var lisNews = $("li",newList);
	var h3s = $("h3",newList);		
	var ps = $("p",newList);
	var prevLiNew = 0;//记录上一次移入的新闻列表li的下标
	var m = -1;

	auto(lisNews,prevLiNew,m)
}

auto(lis,prev,n);*/






















/*//循环顶部的li;
for(var i=0;i<lis.length;i++){
	lis[i].index = i;
	lis[i].onmouseover = function(){//鼠标移入li的时候下面对应的块显示；
		lis[prev].className = "";
		bottomContents[prev].style.zIndex = "-999";	
		this.className = "active";
		bottomContents[this.index].style.zIndex = "999";
		prev = this.index;


//鼠标移出li对应的新闻列表的新闻列表
		var newList = $(".newList",sames)[prev];

		var lisNews = $("li",newList);
		var h3s = $("h3",newList);		
		var ps = $("p",newList);
		var prevLiNew = 0;
		for(var i = 0;i<lisNews.length;i++){
			lisNews[i].index = i;		
			lisNews[i].onmouseover = function(){
				this.className = "activeNew";
				h3s[this.index].style.color = "#fff";
				ps[this.index].style.color = "yellow";
				this.style.background = "#ffb746";
				prevLiNew = this.index;
			}
			lisNews[i].onmouseout = function(){
				h3s[this.index].style.color = "";
				ps[this.index].style.color = "";
				this.style.background = "";
			}
		}
	}
}
*/



