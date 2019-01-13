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
		this.image.src='tank1.svg';
		this.angle=0;
		this.coordx=0;
		this.coordy=0;
		document.addEventListener('keydown', evt=>this.move(evt), false);
	}
	render(){
    		var self = this;
    		document.addEventListener('click',evt=> self.handleCellClick.call(self, evt) , false);
    		ctx.translate(this.coordx, this.coordy);
    		ctx.rotate(Math.PI / 180* this.angle);
    		ctx.drawImage(this.image,this.coordx,this.coordy, 50, 50);
    		this.angle=0;
    		console.log("render");
		
	}
	
	move(event){
      		console.log(this.coordx +" | "+this.coordy);
      		const spd = 2;                                // Speed's value
      		let key = event.key;
      		if(key.substr(0,5)=="Arrow")
                key = key.substr(5);
          	switch (key) {
              		case 'Left':
               			this.angle-=5;
                		break;
     
              		case 'Down':
		        	if(this.coordy<2){
                			this.coordy+=spd;
		        	}
                		break;
     
              		case 'Right':
                		this.angle+=5;
                		break;
     
              		case 'Up':
		        	if(this.coordy>-2){
                			this.coordy-=spd;
		        	}
                		break;
    		}	
	}
}

function bg(){                     // (sth like) refreshing, it shows background.  
	ctx.fillStyle='white';
	ctx.fillRect(0,0,canvw,canvh);
}

const tank1 = new Tank(1);        // creating new object 

function game(){
	bg();
	tank1.render();	
}

setInterval(game,25); // It does game() func 40 times per sec.
