let bottomImg, topImg;

function preload() {
  bottomImg = loadImage('./data/BW.jpg'); //command + k to load files and reference
  topImg = loadImage('./data/colour.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(180);
  topImg.resize(width, height);
  image(bottomImg, 0, 0, width, height);

}


function draw() {
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  copy(topImg, mouseX, mouseY, 80, 80, mouseX, mouseY, 80, 80);
}