function Tank (id){
	this.img="tank.jpg";	
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = new Image();
image.addEventListener('load',function(){ctx.drawImage(image,0,0)});
image.src="tank.jpg";
let key;
document.addEventListener('keydown',move,false);
function move(event){
key = event.key; 
}
