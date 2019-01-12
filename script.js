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
		this.image.src='tank'+ id +'.jpg';
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
    ctx.drawImage(this.image,this.coordx,this.coordy);
    this.angle=0;
    console.log("render");
		
	}
	
		move(event){
      console.log(this.coordx +" | "+this.coordy);
      const spd = 1;                                // Speed's value
          switch (event.keyCode) {
              case 37:                              // Left
                ctx.fillRect(0,0,canvw,canvh);
                this.angle-=5;
                break;
     
              case 40:                              //Up
                ctx.fillRect(0,0,canvw,canvh);
                this.coordy+=spd;
                break;
     
              case 39:                              // Right
                ctx.fillRect(0,0,canvw,canvh);
                this.angle+=5;
                break;
     
              case 38:                              // Down
                ctx.fillRect(0,0,canvw,canvh);
                this.coordy-=spd;
                break;
      }	
  }
}

function bg(){                     // (sth like) refreshing, it shows background.  
	ctx.fillStyle='white';
	ctx.fillRect(0,0,canvw,canvh);
}

const tank1 = new Tank(1);        // creating new object 
tank1.coordx = 0;
tank1.coordy = 0;



function game(){
	bg();
	tank1.render();
	
}

setInterval(game,25);             // It does game() func every 25 milisec.
