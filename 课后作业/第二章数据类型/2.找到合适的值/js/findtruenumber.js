var btn1 = document.querySelector(".yellow button");
var txt1 = document.querySelector(".yellow i");
var txt2 = document.querySelector(".blue i");
var txt3 = document.querySelector(".pink i");
var txt4 = document.querySelector(".orange i");
var arr = [ '100px','abc'-6, [], -98765, 34, -2, 0, '300', , function(){alert(1);}, 
	null, document, [], true, '200px'-30,'23.45元', 5, Number('abc'), function(){ alert(3); }, 'xyz'-90 ];
var str = [];
var str2 = [];
var str3 = [];
var str4 = [];
btn1.onclick = function(){
	//点击之前清空所有：
	str=[];
	str2=[];
	str3=[];
	str4=[];
	for(var i=0;i<arr.length;i++){
		if(Number(arr[i])===arr[i]){//找到arr里所有的数字
			str.push(arr[i]);
		}
		if(!isNaN(parseFloat(arr[i]))){//  parseFloat(arr[i]))可以找到能转成数字的，但是parseFloat转空格转成的是NaN, isNaN排除空字符 
			str2.push(arr[i]);
		}
		if(arr[i]!=arr[i]){//找到可以NaN
			str4.push(i);
		}
	}
	//console.log(str);
	txt1.innerHTML = str;
	//console.log(str2);
	txt2.innerHTML = str2;
	//console.log(Number("100px"));

	var n=str2[0];
	for(var j=1;j<str2.length;j++){
		if(n<str2[j]){
			n=str2[j];
			str3 = n;
		}
	}
	txt3.innerHTML = str3;
	txt4.innerHTML = str4;	
}
 console.log(parseFloat(" "));