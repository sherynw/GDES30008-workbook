let circleSize, r, g, b;
var xPos,yPos;

function setup() {
createCanvas(windowWidth,windowHeight);
frameRate(4);
}


function draw() {
r = random(255);
g = random(255);
b = random(255);
background(r,g,b);
circleSize = random(0,120);
ellipse(mouseX,mouseY,circleSize);

for (i=0; i<10; i++){ //check that i is less than 10 and if it is then draw the other circle
  let lineWeight = random (2,20);
  lineWeight - random (2,10);
  xPos = random(width);
  yPos = random(height);
  fill(255,0,255);
  stroke(255);
  strokeWeight(lineWeight);
  ellipse(xPos,yPos,circleSize);
}

}