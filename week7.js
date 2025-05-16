let img=[];
let angle =0;

let lastToggleTime = 0;
let interval = 1000; // 
let isVisible = true;

function preload(){
  img[1] = loadImage('breadboard.png');
  img[2] = loadImage('fan.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

}


function draw() {
  
  background(173, 216, 230);
  
  // bread broad img
  translate(width / 2, height / 2);
  rotate(0);
  image(img[1], 10, 100, 500, 300);
  
  //green blinker
   noStroke();
   fill(0, 255, 0);
   if (millis() - lastToggleTime > interval) {
    isVisible = !isVisible;        
    lastToggleTime = millis();     
   }

   if (isVisible) {
    ellipse(100, 120, 20, 20);
   }
   
   //red blinker
   noStroke();
   fill(255, 0, 0);
   if (millis() - lastToggleTime > interval) {
    isVisible = !isVisible;        
    lastToggleTime = millis();     
   }

   if (isVisible) {
    ellipse(50, 120, 20, 20);
   }
  
  // fan spinning
  rotate(angle);                   
  let scaleFactor = 0.5;
  image(img[2], 10, 10, 150, 150);
  angle += 0.2;
  


  

}
