	

	class Drag{
		dragInit(dragBox){//init中的参数，接收的是拖拽的元素
			this.dragBox = dragBox;
			this.dragBox.onmousedown = this.downFn.bind(this);
		}
		downFn(ev){
			this.disX = ev.clientX - this.dragBox.offsetLeft;
			this.disY = ev.clientY - this.dragBox.offsetTop;
			document.onmousemove = this.moveFn.bind(this);
			document.onmouseup= this.upFn.bind(this);
		}
		moveFn(ev){
			this.dragBox.style.left = ev.clientX - this.disX + "px";
			this.dragBox.style.top = ev.clientY - this.disY + "px";
		}
		upFn(){
			document.onmousemove = document.onmouseup = null;
		}
	}