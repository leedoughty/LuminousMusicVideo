function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(229, 229, 229);
  for (var x = 0; x <= width; x += 5) {
  fill(255);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(x, 200, 25);
  }
}
