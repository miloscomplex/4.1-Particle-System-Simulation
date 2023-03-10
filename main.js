let emitters = [];

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}

function setup() {
  background(100);
  createCanvas(500, 500);
}


function draw() {
  //noLoop();
  background(0);
  for (let emitter of emitters) {
    emitter.emit(3);
    emitter.show();
    emitter.update();
  }
}