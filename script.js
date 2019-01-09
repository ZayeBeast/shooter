const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function Tank (id){
	this.render=function(){
		const image = new Image();
		image.src="tank.jpg";
		image.addEventListener('load',function(){ctx.drawImage(image,0,0)});
	}	
}


const tank1 = new Tank(1);
let key;
document.addEventListener('keydown',move,false);
function move(event){
key = event.key; 
}
