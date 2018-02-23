function setup() {
    createCanvas(1500, 800, WEBGL);
    background(255);
}

function draw() {
    noFill(255);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(200, 200, 200, mouseX, mouseY);

    fill(250, 200, 200);
    noStroke();
    ellipse(mouseX, mouseY, 50, 50);

    fill(0, 255, 255);
    noStroke();
    triangle(mouseX, mouseY, 50, 20, 86, 75);
}
