var h2 = document.getElementsByTagName('h2');
var list2 = document.getElementsByClassName('list2');
var spans = document.querySelectorAll('.item span');
var aL12 = document.querySelectorAll('.list2 li');
var n = 0;//声明一个变量存放点击时候li的值；
//需求：每次点击好友列表的小标题的时候，相对应的下边的内容显示出来，自己的颜色发生变化，其余的都不改变；
var prev = 0;//记录上一次点击的下标。
for( var i = 0; i < h2.length; i++ ){
    // 添加一个自定义属性，用来记录H2的下标，
    h2[i].index = i;
    h2[i].state=false;//设置H2的默认状态为false;
    h2[i].onclick = function (){//采用选项卡的思想，每次点击更改自己和自己下边的元素的样式；
    	if(prev!=this.index){//过滤一下，当上一次记录的下标与这一次点击的下标相同时不做清除，
    		list2[prev].style.display="none";
			h2[prev].state =false;  
	    	h2[prev].style.background=''; 
	    	spans[prev].className='normal';	
	    	}
		/*list2[prev].style.display="none";
		h2[prev].state =false;  
	    h2[prev].style.background=''; 
	    spans[prev].className='normal'; //清除上一次点击的状态；*/
	    
    	if(this.state){//h2被点击过；
    		list2[this.index].style.display="none";
	    	this.style.background=''; 
	    	spans[this.index].className='normal'; 
			this.state =false;  
    	}else{	//h2没有被点击过；		
	    	list2[this.index].style.display="block"; 
	    	this.style.background='#cc566a'; 
	    	spans[this.index].className='active1';
	    	this.state =true; 	    	
    	}
    	prev = this.index; //记录被点击过的H2d的下标；   	
    }
}
//需求：点击单个好友姓名的时候，添加背景，鼠标移入的时候添加背景，鼠标移入点击
//的姓名的时候背景颜色不改变。
/*var prevIndex = 0;*/
for(var i =0;i<aL12.length;i++){
	aL12[i].index = i;
	aL12[i].isClick = false;
	aL12[i].onclick = function(){
		for(var j=0;j<aL12.length;j++){
			aL12[j].style.background= '';
			aL12[j].isClick = false;//初始化所有的状态都设为假；
		}
		this.style.background= 'pink';
		this.isClick = true;//点击之后状态设为真；
		n = this.index;
	}
	aL12[i].onmouseover = function(){
		if(!this.isClick){
			this.style.background= 'gray';//如果没被点击过，鼠标移入样式改变；
		}
	}
	aL12[i].onmouseout = function(){
		if(!this.isClick){
			this.style.background= '';//如果没被点击过，鼠标移出样式变为初始状态；；
			this.isClick=false;
		}		
	}
}