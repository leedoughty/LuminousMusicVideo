function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  // background(229, 229, 229);
  background(255);
  for (var x = 0; x <= width; x += 5) {
  noFill();
  stroke(0);
  strokeWeight(0.2);
  rotateX(mouseX * 0.0201);
  rotateY(mouseY * 0.201);
  box(x, 1, 1);
  stroke(255, 0, 255);
  sphere(mouseX, 100);
}
}
