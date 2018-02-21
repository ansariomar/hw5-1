var x = [];
var y = [];
ySpeed = [];
xSpeed = [];


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)

  for (var i = 0; i < 100; i = i + 1) {
    x[i] = 210;
    y[i] = 230;
    xSpeed[i] = random(1, 3);
    ySpeed[i] = random(1, 3);
  }
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 30);
  rect(190, 220, 40, 30);



  // draw drip
  // I set the speed range to "random(1,10)" in order to make the difference between each drop's speed more obvious 


  for (var i = 0; i < 16; i = i + 1) {
    // draw drip
    ellipse(x[i], y[i], 25);

    // down 3 pixels each frame, but maybe should be accelerating?
    y[i] = y[i] + ySpeed[i];

    // if invisible for a full “height” amount…
    if (y[i] > height * 2) {
      // reset
      y[i] = 220;
    }
  }
}
