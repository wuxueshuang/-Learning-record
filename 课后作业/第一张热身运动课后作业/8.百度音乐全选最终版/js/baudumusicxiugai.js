var aLi = document.getElementsByTagName("li");
var checkbox = document.querySelectorAll('.item input');//单选按钮
var btn= document.getElementById('checkbox7');
//需求：鼠标移入时候为红色
//点击的时候：
for(var i=0;i<aLi.length;i++){
	aLi[i].index = i;
	if(i%2==0){
		aLi[i].abc = '#fff';
		aLi[i].style.background='#fff';
	}else{		
		aLi[i].abc = 'pink';
		aLi[i].style.background='pink';
	}


//鼠标移入的时候：

	aLi[i].onmouseover = function(){
		this.style.background = '#e15671';
	}
//鼠标移出的时候：
	aLi[i].onmouseout = function(){	
		// 从移开的li中找input.用input 的状态来控制li
		var checkboxIndex =this.querySelector("input");
		if(!checkboxIndex.checked){
			if(this.index%2==0){
				this.style.background='#fff';
			}else{		
				this.style.background='pink';
			}
		}		
	}
//点击全选按钮，选中所有的歌曲；
var alls = document.getElementById("alls");//全选按钮对应的div
//var checkbox7 = document.getElementById("checkbox7")//全选按钮
	//alls.isClick=false;
	
	btn.onclick = function(){
		btn.checked = false;
		for(var i=0;i<aLi.length;i++){
			console.log(btn.checked);
			checkbox[i].checked = this.checked;
			if(!btn.checked){
				aLi[i].style.background = '#e15671';
				//alls.isClick=false;
				btn.checked = true;
			}else{
				if(aLi[i].index%2==0){
					aLi[i].style.background='#fff';
				}else{		
					aLi[i].style.background='pink';
				}
				btn.checked = false;
			}
		}
	}

//点击单选按钮：
	/*for(var j=0;j<checkbox.length;j++){
		checkbox[j].onclick = function(){
			if(this.checked){
				var n=0;
				for(var i = 0;i<checkbox.length;i++){
					if(checkbox[i].checked){
						n++;
						aLi[i].style.background = '#e15671';
					}
				}
				if(n==checkbox.length){
					btn.checked = true;
				}

			}else{
				btn.checked = false;
			}
		}
	}*/

	/*for(var j=0;j<checkbox.length;j++){
		aLi[i].onclick = function(){
			if(this.checked){
				var alls = true;//全选按钮被选中，所有的li全被选中；
				for(var j=0;j<aLi.length;j++){
					if(!checkbox[j].checked){
						btn.checked = false;
						break;
					}

				}
				btn.checked = alls;//全选按钮状态
			}else{
				btn.checked = false;
			}
		}
		
	}*/
}