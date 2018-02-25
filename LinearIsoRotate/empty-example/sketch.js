let twoPyramid;
let cube;
let icosa;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);

}

function preload() {
  icosa = loadModel("icosa.obj");
  // cube = loadModel("cube.obj")
}

function draw() {
  // background(229, 229, 229);

  rotateY(mouseY * 0.01);
  rotateZ(frameCount * 0.01);
  // stroke(255);
  // strokeWeight(0.5);
  // noFill();
  // ambientMaterial(255);
  // fill(255);
  // scale(1);
  // model(hex);

  scale(2);
  noFill();
  stroke(255);
  strokeWeight(0.5);
  model(icosa);
}
