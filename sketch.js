
let x, y, d, xDir, yDir, speed, r, g, b;
let angle, angleSpeed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  x = random(width);
  y = random(height);
  d = random(70, 100);

  angle = 45;
  angleSpeed = 5;

  xDir = random(-2, 2);
  yDir = random(-2, 2);

  speed = random(1, 7);

  r = 200;
  g = 80;
  b = 200;
}

function draw() {
  background(255, 80, 200, 10);

  // Change size and color over time
  d = map(sin(angle), -1, 1, 10, 300);
  r = map(sin(angle), -1, 1, 0, 255);
  b = map(sin(angle), -1, 1, 255, 0);

  // Invert colors when mouse is pressed
  colorInvert();

  // Draw layered circles
  display(7, d, r, g, b);

  // Move the circles
  x += xDir * 15;
  y += yDir * 10;

  // Check canvas edges
  keepInCanvas();

  angle += angleSpeed;
}

// Keep the circles inside the canvas
function keepInCanvas() {
  if (x > width || x < 0) {
    xDir *= -1;
    randomColor();
  }

  if (y > height || y < 0) {
    yDir *= -1;
    randomColor();
  }
}

// Choose a random color
function randomColor() {
  r = random(255);
  g = random(25, 255);
  b = random(255);
}

// Invert colors while the mouse is pressed
function colorInvert() {
  if (mouseIsPressed) {
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;
  }
}

// Draw multiple layered circles
function display(numShapes, diam, cr, cg, cb) {
  for (let i = numShapes; i > 0; i--) {
    let offsetX = map(sin(angle), -1, 1, -5, 5);
    let offsetY = map(sin(angle), -1, 1, -7, 7);

    fill(cr, cg, cb);
    stroke("yellow");
    circle(x + offsetX * i, y + offsetY * i, diam * i);
  }
}
