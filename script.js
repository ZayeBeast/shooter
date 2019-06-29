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
    ctx.translate(this.coordx+(tankDim/2), this.coordy+(tankDim/2));
    ctx.rotate(Math.PI / 180* this.angle);
    ctx.translate(-(this.coordx+(tankDim/2)), -(this.coordy+(tankDim/2)));
    ctx.drawImage(this.image, this.coordx, this.coordy, tankDim, tankDim);
    console.log('render');
    console.log(this.coordx +' | '+this.coordy);
    this.angle = 0;
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
        this.coordy += spd;
        break;

      case 'Right':
        this.angle += 5;
        break;

      case 'Up':
        this.coordy -= spd;
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
