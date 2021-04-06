let font;
let textLayer;

let container;
let w;
let h;
let border;

let angle = 0;

let fh = 50;

function updateContainer() {
  container = select("#sketchContainer");
  w = parseFloat(getComputedStyle(container.elt).getPropertyValue("width"));
  h = parseFloat(getComputedStyle(container.elt).getPropertyValue("height"));
}

function windowResized() {
  updateContainer();
  resizeCanvas(w, h);
}

let ship;

function setup() {
  updateContainer();
  canvas = createCanvas(w, h);
  canvas.parent("#sketchContainer");

  // console.log(height)

  createSprite(width / 2, height - 50 / 2, w, 50);

  ship = new Rocket();
}

function draw() {
  background(255, 255, 255);

  drawSprites();
  document.getElementById("fps").innerHTML = frameRate().toFixed(2);
}

class Rocket {
  constructor() {
    this.rocket = createSprite(width / 2, height / 2, 10, 10);
  }

  run() {
    draw(this.rocket);
  }
}
