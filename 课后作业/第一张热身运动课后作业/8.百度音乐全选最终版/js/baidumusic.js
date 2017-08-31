var aLi = document.getElementsByTagName("li");
var checkbox = document.querySelectorAll('.item input');
var btn= document.getElementById('checkbox7');
//var all = document.getElementsByClassName("all")[0];
//需求：鼠标移入时候为红色
//点击的时候：
var n=0;
for(var i=0;i<aLi.length;i++){
	if(i%2==0){
		aLi[i].abc = '#fff';
		aLi[i].style.background='#fff';
	}else{		
		aLi[i].abc = 'pink';
		aLi[i].style.background='pink';
	}
	aLi[i].index = i;
	aLi[i].isClick = false;
	aLi[i].onclick = function(){
		if(this.isClick){			
			checkbox[this.index].checked = false;
			console.log('我是没被点击过的');
			//this.style.background = '';
			this.isClick = false;
			
			n--;
		}else{
			checkbox[this.index].checked = true;
			this.style.background = '#e15671';
			console.log('我是被点击过的');
			this.isClick = true;
			n++;	
			
		}


		if(n==aLi.length){
			btn.checked = true;
		}else{
			btn.checked = false;
			if(i%2==0){
				this.style.background='#fff';
			}else{		
				this.style.background='pink';
			}
		}
	}
//鼠标移入的时候：

	aLi[i].onmouseover = function(){
		this.style.background = '#e15671';
	}

//鼠标移出的时候：
	aLi[i].onmouseout = function(){
		if(this.isClick == true){
			//console.log('我是被点击过的');

		}else{
			if(i%2==0){
				this.style.background='#fff';
			}else{		
				this.style.background='pink';
			}
		}		
	}
	//点击全选按钮，选中所有的歌曲；
	alls.isClick=false;
	alls.onclick = function(){
		if(this.isClick){
			for(var j=0;j<aLi.length;j++){
				aLi[j].isClick = false;
				aLi[j].style.background = '';
				checkbox[j].checked = false;
				btn.checked = false;
			}			
			alls.isClick=false;
		}else{
			for(var j=0;j<aLi.length;j++){
				aLi[j].isClick = true;
				aLi[j].style.background = '#e15671';
				checkbox[j].checked = true;
				btn.checked = true;
			}
			alls.isClick=true;
		}		
	}
}
