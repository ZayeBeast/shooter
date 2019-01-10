const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvw=1000;
const canvh=500;

canvas.width=canvw;
canvas.height=canvh;
class Tank {
	constructor(id) {
		this.id=id;	
		this.image = new Image();
		this.image.src='tank'+id+'.jpg';
		this.angle=0;
		this.x=0;
		this.y=0;
		document.addEventListener('keydown', evt=>this.move(evt), false);
	}
	render(){
		var self = this;
		document.addEventListener('click',evt=> self.handleCellClick.call(self, evt) , false);
		ctx.drawImage(this.image,this.x,this.y);
		
	}
	
	move(event){
		console.log(this.x);
		//switch(event.key){
			//case 'a':
			//this.x++;
			//console.log(this.x);
			//break;
			
		//}
	}	
}

function bg(){
	ctx.fillStyle='blue';
	ctx.fillRect(0,0,canvw,canvh);
}

const tank1 = new Tank(1);



function game(){
	bg();
	tank1.render();
	
}

setInterval(game,25);
