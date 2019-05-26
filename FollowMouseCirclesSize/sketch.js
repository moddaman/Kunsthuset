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
  createCanvas(4000, 4000);
  background('#ffb8b8');
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function draw() {
  if (shouldPaint) {
    fill(getRandomColor());
    const x = getRandomInt(100, 600);
    ellipse(mouseX, mouseY, x, x);
  }
}
