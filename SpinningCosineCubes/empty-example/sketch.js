function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  rotateY(frameCount * 0.01);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 40; i++){
      translate(sin(frameCount * 0.001 + j) * 100, sin(frameCount * 0.001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      noFill();
      stroke(255);
      strokeWeight(0.5);
      box(80);
      pop();
    }
    pop();
  }
}
