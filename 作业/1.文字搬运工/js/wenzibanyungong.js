var btn = $('.btn')[0]
var xianshi = $('.xianshi')[0]
var showLeft = $('.left')[0]
var showRight = $('.right')[0]

var strRight = "";
var timer = null;
//需求：点击按钮左边的输入框的内容从第一个开始一个一个字符往右边走；
//右边的输入框的内容第一个开始一个一个字符加；
/*btn.onclick = function(){
	var strLeft1 = showLeft.innerHTML;
	showRight.innerHTML = "";

	var n=0;
	clearInterval(timer);
	timer = setInterval(function add(){
		strLeftnew=strLeft1.slice(n);
		showLeft.innerHTML = strLeftnew;
		showRight.innerHTML += strLeft1.charAt(n);
		xianshi.innerHTML = `${n}/${strLeft1.length}`;
		n++;
		if(showLeft.innerHTML==""){
			clearInterval(timer);
			n=strLeft1.length;
			timer = null;
			showLeft.innerHTML = "";
		}
	},10)

	
}*/

btn.onclick = function(){
	if(timer){
		return;
	}	
	var strLeft = showLeft.value;
	console.log(strLeft,strLeft.length);
	showRight.innerHTML = "";

	var n=0;
	clearInterval(timer);
	timer = setInterval(function add(){
		if(strLeft.length==0){
			alert("请输入内容");
		}
		strLeftnew=strLeft.slice(n);
		showLeft.value = strLeftnew;
		showRight.innerHTML += strLeft.charAt(n);
		xianshi.innerHTML = `${n}/${strLeft.length}`;
		showLeft.disabled = true;
		n++;
		if(showLeft.value==""){
			clearInterval(timer);
			n=strLeft.length;
			timer = null;
			showLeft.value = "";
			showLeft.disabled = false;
		}
	},10)

	
}