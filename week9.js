let x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(244, 194, 194);

  noStroke();
  fill(230, 255, 230);
  rect(x, 0, 800, windowHeight);

  x += 1; // move to the right

  // Reset x if it goes off screen
  if (x > width) {
    x = -20; // move it just off the left side
  }
}