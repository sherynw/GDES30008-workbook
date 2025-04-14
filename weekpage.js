let circleSize;

function setup() {
createCanvas(windowWidth,windowHeight);
frameRate(5); //since it is 60 frame rate will slow it down
background(220);
textSize(30);
text("WEEK RESEARCH",1200,50);

}


function draw() {
circleSize = random(100,800); //random minimum to maximum
r = random(255);
g = random(255);
b = random(255);

//r=map(mouseX,0,width,0,255);
fill(r,g,b,20);
textSize(30);
//circle(width/2,height/2,mouseX); //circle gets larger with mouse movement
circle(width/2,height/2,circleSize);

square(mouseX,mouseY,circleSize);
}