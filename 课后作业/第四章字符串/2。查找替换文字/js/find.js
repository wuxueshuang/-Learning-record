var open = $(".open")[0];
var retract = $(".retract")[0];
var search = $(".search");
var replace = $(".replace");
var panel = $(".panel");
var btn = $(".btn");//图片确定查询按钮

var defaultStr = "请输入内容";
open.onclick = function(){
	open.style.display="none";
	retract.style.display="block";
	search[0].style.display="block";
	replace[0].style.display="block";
	panel[0].style.display="block";
	boxTxt.innerHTML = oldBoxStr;
}
retract.onclick = function(){
	retract.style.display="none";
	open.style.display="block";
	search[0].style.display="none";
	replace[0].style.display="none";
	panel[0].style.display="none";
	boxTxt.innerHTML = oldBoxStr;
	inputs[2].value="defaultStr";
}

var inputs = $("input");
var boxTxt = $(".box_txt")[0];
var boxStr = boxTxt.innerHTML;
var oldBoxStr = boxTxt.innerHTML;//始终不变的box里的内容；
inputs[0].onclick = function(){
	inputs[0].value="";
}
inputs[1].onclick = function(){
	//boxTxt.innerHTML = oldBoxStr;
	inputs[1].value="";
	inputs[2].value="";
}
inputs[2].onclick = function(){
	inputs[2].value="";
}	




//点击查找：文字按钮
var inputStr = "";
var searchBar1 = $(".search-bar1")[0];
var searchBar2 = $(".search-bar2")[0];
search[0].onclick = function(){
	searchBar1.style.display="block";
	searchBar2.style.display="none";
	inputs[0].value = defaultStr;
}
search[1].onclick = function(){
	searchBar1.style.display="block";
	searchBar2.style.display="none";
}

var arr = "";
var newStr = "";
var strChange = "";
btn[0].onclick = function(){
	//boxStr = oldBoxStr;
	str = inputs[0].value;
	if(inputs[0].value==""){
		alert("您还没有输入想要查找的内容");
	}else if(oldBoxStr.indexOf(str)==-1){
		alert("没有找到要找的内容");
		//inputs[0].value = defaultStr;
	}else{
		arr = boxStr.split(str);
		boxStr = arr.join("<span class='active'>"+str+"</span>");
		boxTxt.innerHTML = boxStr;
	}
	
}












//点击替换：文字按钮

replace[0].onclick = function(){
	boxStr = oldBoxStr;
	boxTxt.innerHTML=oldBoxStr;
	searchBar1.style.display="none";
	searchBar2.style.display="block";
	inputs[1].value = defaultStr;
}
replace[1].onclick = function(){
	boxTxt.innerHTML = oldBoxStr;
	searchBar1.style.display="none";
	searchBar2.style.display="block";
	inputs[1].value = defaultStr;
}
btn[1].onclick = function(){
	if(inputs[1].value==""){
		alert("您还没有输入想要替换的内容");
	}/*else if(boxStr.indexOf(inputs[2].value)==-1){
		alert("没有找到要替换的内容");
		inputs[2].value = defaultStr;
	}*/else if(inputs[2].value==""){
		alert("您还没有输入要替换成的内容");
	}else{
		newStr = inputs[1].value;
		strChange = inputs[2].value;
		arr = boxStr.split(newStr);
		boxStr = arr.join("<span class='active'>"+strChange+"</span>");
		boxTxt.innerHTML = boxStr;
	}
	
}