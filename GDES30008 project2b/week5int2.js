var capture;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 255);
    capture = createCapture(VIDEO);
    capture.hide();
    imageMode(CENTER);
}

function draw(){
    // push();
    // filter(THRESHOLD, 0);
    image(capture, mouseX, mouseY, 120, 90);
    // pop();
}
