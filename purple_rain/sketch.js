var drops = [];

function setup() {
  createCanvas(750, 750);
  for (var i = 0; i < 400; i++){
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++){
    drops[i].fall();
    drops[i].show();
  }
}
