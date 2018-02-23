function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // background(0, 177, 64);
  // background(229, 229, 229);
}

function draw() {
  background(0, 177, 64);
  rotateX(frameCount * 0.01);
  rotateY(mouseY * 0.01);
  noFill();
  stroke(255, 255, 0);
  strokeWeight(2);
  box(50);

  strokeWeight(0.5);
  sphere(200);
}
