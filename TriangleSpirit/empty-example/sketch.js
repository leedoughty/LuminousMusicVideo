let twoPyramid;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
}

function preload() {
  twoPyramid = loadModel("pyramid.obj");
}

function draw() {
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  stroke(255);
  // noStroke();
  // strokeWeight(0.2);
  // ambientMaterial(255);
  noFill();
  strokeWeight(0.2);
  // fill(255);
  scale(0.8);
  model(twoPyramid);
}
