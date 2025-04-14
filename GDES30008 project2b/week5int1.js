var diceRoll;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
  capture = createCapture(VIDEO);
  capture.hide();
  imageMode(CENTER);
  textAlign(CENTER);
}


function draw() {
  background(0, 0, 255);
  textSize(72);
  text(diceRoll, width/2, height/2);
}


function mousePressed() {
  diceRoll = random(10);
  diceRoll.int();

}