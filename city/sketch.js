let buildings = [];
let velocity = 3;
let b;

function setup() {
  createCanvas(800, 800);
  append(buildings, new Building(width+50));
  b = new Building(width - 100);
}

function draw() {
  background(150);
  //translate(100,100);
  scroll();
  //test();
  noLoop();

}

function test(){
  b.show();
  for (let w = 0; w < b.windows.length; w++){
    b.windows[w].show();
  }
}

function scroll(){
  // add more buildings if needed
  if (buildings.length < 20){
    //determine the location of the last building
    let newX = buildings[buildings.length-1].x;
    //create new buildings
    let b = new Building(newX);
    //console.log(b);
    //push to the stack of buildings
    append(buildings,b);
}



//update the building location
for (let b = 0; b < buildings.length; b++){
  buildings[b].update(velocity);
}


//display the buildings
for (let b = 0; b < buildings.length; b++){
  buildings[b].show();
  //display the windows
  for (let w = 0; w < buildings[b].windows.length; w++){
    buildings[b].windows[w].update(3);
    buildings[b].windows[w].show();
  }
}

}