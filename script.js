const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvw=1000;
const canvh=500;
let key;

canvas.width=canvw;
canvas.height=canvh;

class Tank {
	constructor(id) {
		this.id=id;	
		this.image = new Image();
		this.image.src='tank'+id+'.jpg';
	}	
	
	render(){
		ctx.drawImage(this.image,0,0);
	}	
}

function bg(){
	ctx.fillStyle='blue';
	ctx.fillRect(0,0,canvw,canvh);
}

const tank1 = new Tank(1,);

document.addEventListener('keydown',move,false);
function move(event){
key = event.key; 
}

function game(){
	bg();
	tank1.render();
}

setInterval(game,25);
