function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setup() {
  // put setup code here
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill('#f9ca24');
  } else {
    fill(getRandomColor());
  }
  ellipse(mouseX, mouseY, 80, 80);
  // put drawing code here
}
