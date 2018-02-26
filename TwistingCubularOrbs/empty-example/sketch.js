function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  rotateY(frameCount * 0.01);
  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 10; i++){
      translate(sin(frameCount * 0.001 + j) * 50, sin(frameCount * 0.001 + j) * 10, i * 0.1);
      rotateX(mouseX * 0.002);
      rotateY(mouseY * 0.002);
      push();
      noFill();
      stroke(255);
      x = 0;
      var x = x + 1;
      strokeWeight(1);
      box(70);
      stroke(0, 0, 255);
      strokeWeight(0.5);
      sphere(30);
      pop();
    }
    pop();
  }
}
