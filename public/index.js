var x = 5;
var y = 5;
function setup() {
  createCanvas(x * 40, y * 40);
}

function draw() {
  for(var w = 0; w < x; w++) {
    for(var h = 0; h < y; h++) {
      rect(w*40,h*40,40,40);
    }
  }
  fill(255, 0, 0);
}
