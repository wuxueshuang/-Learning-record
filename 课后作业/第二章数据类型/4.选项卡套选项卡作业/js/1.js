var list = document.querySelector(".list");
var leftlis = document.querySelectorAll(".contleft li");//左边的小块
var showbox = document.querySelectorAll(".contright div");
//点击左边的小LI控制右边的图片和按钮显示；
for(var i=0;i<leftlis.length;i++){
	leftlis[i].index = i;
	leftlis[i].onclick = function(){
		//清空之前样式；
		for(var j=0;j<leftlis.length;j++){
			showbox[j].style.opacity=0;
			leftlis[j].className="";
			showbox[j].style.zIndex="0";
		}
		//设置当前点击的元素与当前元素所控制的元素的样式。
		showbox[this.index].style.opacity=1;
		showbox[this.index].style.zIndex="9999";
		this.className="active";
	}
	
}
/*changeImg(showbox[0]);
changeImg(showbox[1]);
changeImg(showbox[2]);
changeImg(showbox[3]);*/

for(var i=0;i<showbox.length;i++){
	changeImg(showbox[i]);
}
function changeImg(parent){
	//var showRight = document.querySelector(className);
	var rightBtns = parent.querySelectorAll("button");
	var rightImg =parent.querySelectorAll("img");
	for(var i = 0;i<rightBtns.length;i++){
		rightBtns[i].index = i;
		rightBtns[i].onclick = function(){
			for(var j=0;j<rightBtns.length;j++){
				rightBtns[j].className = "";
				rightImg[j].style.opacity =0;
			}
			this.className = "active1";
			rightImg[this.index].style.opacity = 1;	
		}	
	}
}