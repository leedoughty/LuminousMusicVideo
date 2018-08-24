let images = [];
let toruses = [];
var image1;
var image2;
var image3;

function preload() {
  for (var i = 0; i < 4; i++) {
    images[i] = loadImage("../../textures/kishi" + i + ".png");
  }
  for (var o = 0; o < 3; o++) {
    toruses[o] = loadModel("../../objects/torus" + o + ".obj");
  }
  image1 = loadImage("../../textures/cover.jpg");
  image2 = loadImage("../../textures/idea2.jpg");
  image3 = loadImage("../../textures/idea3.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function rotateThoseOrbs() {
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
}

function draw() {
  background(255);
  scale(0.6);
  fill(0, 0, 0, 0);
  texture(image1);
  rotateThoseOrbs();
  model(toruses[0]);
  texture(image2);

  rotateThoseOrbs();
  model(toruses[1]);
  // texture(image3);
  //
  // rotateThoseOrbs();
  // model(toruses[2]);
}

function mousePressed() {
  save("myCanvas.jpg");
}
