var btn = document.getElementById("btn");
var list = document.getElementById("list");
var pic1 = document.getElementById("pic1");
var message = document.getElementById("message");
var img1 = document.getElementById("img1");
var onOff = true;
var iChassName = '';
var spanChassName = '';
	img1.onclick = function(){
		if(onOff){
			img1.src = 'images/pic2.png';
			onOff = false;
		}else{
		     img1.src = 'images/pic1.png';
			 onOff = true;
		}	
	}
	/*btn.onclick = function(){
		if(onOff){
			if(message.value == ""){
			alert ('亲，写点什么吧~~~');
		}else{
			console.log(pic1.innerHTML);
			list.innerHTML += '<li><span class="bg11">' + message.value + '<i class="i1">' + '</i>' +'</span>' + pic1.innerHTML+ '</li>';
			
			}
		}else{
			if(message.value == ""){
				alert ('亲，写点什么吧~~~');
				list.innerHTML = list.innerHTML;
			}else{
				console.log(pic1.innerHTML);
				list.innerHTML += '<li>' + pic1.innerHTML+ '<span class="bg12">' + message.value + '<i class="i2">' + '</i>' +'</span>' +  '</li>';				
				}
				message.value = "";
		}		
	}*/
	
	
	btn.onclick = function(){
		if(message.value == ""){
			alert ('亲，写点什么吧~~~');
		}else{
			if(onOff){
				iChassName = 'i1';
				spanChassName = 'bg11';
			
			}else{
				iChassName = 'i2';
				spanChassName = 'bg12';
				
			}
			//message.value = "";
			list.innerHTML += '<li><span class="'+spanChassName+'">' + message.value + '<i class="'+iChassName+'">' + '</i>' +'</span>' + pic1.innerHTML+ '</li>';
		}
		message.value = "";
	}
	
	
	
	
	
	
	

	
	

