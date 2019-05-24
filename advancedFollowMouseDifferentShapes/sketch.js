function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let shouldPaint = false;

function setup() {
  createCanvas(6000, 8400);
  background('#000');
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
  if (shouldPaint) {
    fill(getRandomColor());
    quad(
      mouseX,
      mouseY,
      mouseX,
      mouseY + getRandomInt(120),
      mouseX + getRandomInt(120),
      mouseY,
      mouseX + getRandomInt(120),
      mouseY + getRandomInt(120)
    );
  }
}
