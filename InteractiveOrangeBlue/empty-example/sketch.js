var orb;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // background(0, 177, 64);
  background(229, 229, 229);

}

function draw() {
  // background(0, 177, 64);
  // fill(255);
  // background(229, 229, 229);
  stroke(255, 128, 0);
  strokeWeight(2);
  noFill();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  var x = mouseX;
  box(x);

  stroke(0, 0, 255);
  strokeWeight(0.5);
  sphere(x);
}
