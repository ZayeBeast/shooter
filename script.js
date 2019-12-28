'use strict';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvw = canvas.width;
const canvh = canvas.height;
const tankDim = 50;

/**
 * Tank class containing info about tanks on the screen (position, id, avatar)
 */
class Tank {
  /**
   * @param {number} id
   */
  constructor(id) {
    this.id = id;
    this.image = new Image();
    this.image.src = 'tank1.svg';
    this.angle = 0;
    this.coordx = 0;
    this.coordy = 0;

    document.addEventListener('keydown', (evt)=>this.move(evt), false);
  }

  /** Render tank on global ctx */
  render() {
    ctx.save();
    ctx.translate(this.coordx, this.coordy);
    ctx.rotate(this.angle*Math.PI/180);
    ctx.drawImage(this.image, -tankDim/2, -tankDim/2, tankDim, tankDim);
    ctx.restore();
    console.log('render: '+this.coordx+' | '+this.coordy+' / '+this.angle);
  }

  /**
   * @param {onkey-event} event
   */
  move(event) {
    const spd = 2; // Speed's value
    let key = event.key;
    if (key.substr(0, 5)=='Arrow') {
      key = key.substr(5);
    }
    switch (key) {
      case 'Left':
        this.angle -= 5;
        break;

      case 'Down':
        this.coordx -= spd*Math.sin(this.angle*Math.PI/180);
        this.coordy += spd*Math.cos(this.angle*Math.PI/180);
        break;

      case 'Right':
        this.angle += 5;
        break;

      case 'Up':
        this.coordx += spd*Math.sin(this.angle*Math.PI/180);
        this.coordy -= spd*Math.cos(this.angle*Math.PI/180);
        break;
    }
  }
}

/** (sth like) refreshing, it shows background. */
function bg() {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvw, canvh);
}

const tank1 = new Tank(1); // creating new object

/** The main game loop */
function game() {
  bg();
  tank1.render();
}

document.addEventListener('DOMContentLoaded', function() {
  setInterval(game, 25); // It does game() func 40 times per sec.
}, false);
