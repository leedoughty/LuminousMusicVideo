var orb;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // background(0, 177, 64);
  background(229, 229, 229);

}

function draw() {
  // background(0, 177, 64);
  // fill(255);
  noFill();
  strokeWeight(0.2);
  stroke(255, 255, 0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(200);

  noFill();
  stroke(0, 0, 255);
  rotateX(mouseX * 0.0001);
  rotateY(mouseY * 0.0001);
  strokeWeight(0.2);
  sphere(250);


}
