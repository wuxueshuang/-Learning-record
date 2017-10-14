var box = document.querySelector(".box");
var content = box.querySelectorAll(".content");
/*getValue(content[0]);
getValue(content[1]);
getValue(content[2]);
getValue(content[3]);*/
for(var i=0;i<content.length;i++){
	getValue(content[i]);
}
function getValue (parent){
	var btn = parent.querySelector("button");
	var title = parent.querySelector(".title");
	var edit = parent.querySelector(".edit");
	var span = parent.querySelector("span");
	var message = parent.querySelector(".message");
	btn.onclick = function(){
		// 点击小图标，编辑块出现，标题块隐藏
		title.style.display = "none";	
		edit.style.display = "block";
		message.value = span.innerHTML;
		message.select();
	}
	var save = parent.querySelector(".save");
	var quit = parent.querySelector(".quit");
	//点击确定，编辑块隐藏，标题块显示，把编辑的value值显示在标题块中

	save.onclick = function(){
		title.style.display = "block";	
		edit.style.display = "none";
		span.innerHTML = message.value;
	}
	//点击取消，编辑块出现隐藏，标题块显示，标题块中标题不变
	quit.onclick = function(){
		title.style.display = "block";	
		edit.style.display = "none";
}




/*var btn = content[0].querySelector("button");
var title = content[0].querySelector(".title");
var edit = content[0].querySelector(".edit");
var span = content[0].querySelector("span");
var message = content[0].querySelector(".message");
var text = "";

btn.onclick = function(){
	// 点击小图标，编辑块出现，标题块隐藏
	title.style.display = "none";	
	edit.style.display = "block";
	message.select();
}
var save = content.querySelector(".save");
var quit = content.querySelector(".quit");
//点击确定，编辑块隐藏，标题块显示，把编辑的value值显示在标题块中

save.onclick = function(){
	title.style.display = "block";	
	edit.style.display = "none";
	span.innerHTML = message.value;
	text=message.value;
}
//点击取消，编辑块出现隐藏，标题块显示，标题块中标题不变
quit.onclick = function(){
	title.style.display = "block";	
	edit.style.display = "none";
	span.innerHTML =text;*/
}