let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  colorMode(HSB);

  angleMode (DEGREES);

  background(0);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont('Helvetica');

  //interactive circle in the bg
  for (let i = 0; i < 20; i++){
    circles.push({
      x: random(width),
      y: random(height),
      size: random(20, 100),
      speed: random (0.5, 10),
    });
  }
}

function draw() {

  background(0);

  //draw circles
  fill('white');
  for (let c of circles){
    ellipse(c.x, c.y, c.size);
    c.y += c.speed;

    if (c.y > height){
      c.y = -c.size;
      c.x = random(width);
    }
  }

  //text title
  
  stroke(500);
  strokeWeight(2);
  fill(0);
  text('WELCOME TO THE CREATIVE CODING WORKBOOK', width/2, height/2);



}
