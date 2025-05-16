let img=[];

function preload(){
  img[1] = loadImage('breadboard.png');
  img[2] = loadImage('potato.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}


function draw() {
  
  background(255, 229, 180);
  
  //bread board img
  translate(width/2, height/2);
  rotate(0);
  image(img[1], 10, 100, 500, 300);
  

  image(img[2], -320, -80, 300, 300);

}