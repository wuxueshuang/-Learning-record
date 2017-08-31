var box=document.getElementById("box");
var bg1=document.getElementById("bg1");
var textdiv=document.getElementById("textdiv");
var button2=document.getElementById("button2");
var clickbtn1=document.getElementById("click-btn1");
var clickbtn2=document.getElementById("click-btn2");
var clickbtn3=document.getElementById("click-btn3");
var clickbtn4=document.getElementById("click-btn4");
var clickbtn5=document.getElementById("click-btn5");
var clickbtn6=document.getElementById("click-btn6");
var clickbtn7=document.getElementById("click-btn7");
var clickbtn8=document.getElementById("click-btn8");
var clickbtn9=document.getElementById("click-btn9");
var clickbtn10=document.getElementById("click-btn10");
var clickbtn11=document.getElementById("click-btn11");

var form2=document.getElementById("form2");
button2.onclick = function(){
	form2.style.display="block";
	bg1.style.display="block";
}
clickbtn1.onclick = function(){
	textdiv.style.background="red";		
}
clickbtn1.onmouseover = function(){
	clickbtn1.style.border="1px solid #000";
	clickbtn1.style.color="#000";
}
clickbtn1.onmouseout = function(){
	clickbtn1.style=clickbtn1
}
clickbtn2.onclick = function(){
	textdiv.style.background="yellow";		
}
clickbtn2.onmouseover = function(){
	clickbtn2.style.border="1px solid #000";
	clickbtn2.style.color="#000";
}
clickbtn2.onmouseout = function(){
	clickbtn2.style=clickbtn2;
}
clickbtn3.onclick = function(){
	textdiv.style.background="blue";	
}
clickbtn3.onmouseover = function(){
	clickbtn3.style.border="1px solid #000";
	clickbtn3.style.color="#000";
}
clickbtn3.onmouseout = function(){
	clickbtn3.style=clickbtn3
}
clickbtn4.onclick = function(){
	textdiv.style.width="200px";
}
clickbtn4.onmouseover = function(){
	clickbtn4.style.background="#efbd00";
	clickbtn4.style.border="1px solid #000";
	clickbtn4.style.color="#000";
}
clickbtn4.onmouseout = function(){
	clickbtn4.style.background="#fff";
	clickbtn4.style.border="1px solid #c0c0c0";
	clickbtn4.style.color="#c0c0c0";
}
clickbtn5.onclick = function(){
	textdiv.style.width="300px";		
}
clickbtn5.onmouseover = function(){
	clickbtn5.style.background="#efbd00";
	clickbtn5.style.border="1px solid #000";
	clickbtn5.style.color="#000";
}
clickbtn5.onmouseout = function(){
	clickbtn5.style=clickbtn5
}
clickbtn6.onclick=function(){
	textdiv.style.width="400px";		
}
clickbtn6.onmouseover = function(){
	clickbtn6.style.background="#efbd00";
	clickbtn6.style.border="1px solid #000";
	clickbtn6.style.color="#000";
}
clickbtn6.onmouseout = function(){
	clickbtn6.style=clickbtn6
}
clickbtn7.onclick=function(){
	textdiv.style.height="200px";		
}
clickbtn7.onmouseover = function(){
	clickbtn7.style.background="#efbd00";
	clickbtn7.style.border="1px solid #000";
	clickbtn7.style.color="#000";
}
clickbtn7.onmouseout = function(){
	clickbtn7.style=clickbtn7
}
clickbtn8.onclick=function(){
	textdiv.style.height="300px";		
}
clickbtn8.onmouseover = function(){
	clickbtn8.style.background="#efbd00";
	clickbtn8.style.border="1px solid #000";
	clickbtn8.style.color="#000";
}
clickbtn8.onmouseout = function(){
	clickbtn8.style=clickbtn8
}
clickbtn9.onclick=function(){
	textdiv.style.height="400px";
}
clickbtn9.onmouseover = function(){
	clickbtn9.style.background="#efbd00";
    clickbtn9.style.border="1px solid #000";
    clickbtn9.style.color="#000";
}
clickbtn9.onmouseout = function(){
	clickbtn9.style=clickbtn9
}
clickbtn10.onclick=function(){
	textdiv.style.height="100px";
	textdiv.style.width="100px";
	textdiv.style.background="#808080";
}
clickbtn11.onclick=function(){
	form2.style.display="none";
	bg1.style.display="none";
}