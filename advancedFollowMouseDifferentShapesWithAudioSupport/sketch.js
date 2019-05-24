function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let shouldPaint = false;
let mic;

function setup() {
  createCanvas(8400, 6000);
  // createCanvas(2500, 2500);

  background('#9AECDB');
  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function keyPressed() {
  if (keyCode === 83) {
    // 83 = s
    shouldPaint = shouldPaint ? false : true;
  } else if (keyCode === 65) {
    //65 = a
    saveCanvas('myCanvas', 'png');
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw() {
  if (shouldPaint && mouseIsPressed) {
    let vol = mic.getLevel() * 1000;
    fill(getRandomColor());
    quad(
      mouseX,
      mouseY,
      mouseX,
      mouseY + getRandomInt(vol),
      mouseX + getRandomInt(vol),
      mouseY,
      mouseX + getRandomInt(vol),
      mouseY + getRandomInt(vol)
    );
  }
}
