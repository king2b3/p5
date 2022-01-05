function Drop(){
  this.x = random(width);
  this.y = random(-500, -50);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 10, 20);
  this.speed = map(this.z, 0, 20, 1, 20);

  
  this.fall = function(){
    this.y = this.y + this.speed;
    var gravity = map(this.z, 0, 20, 0, 0.2);
    this.speed = this.speed + gravity;
    
    if (this.y > height){
      this.y = random(-200, -100);
      this.speed = map(this.z, 0, 20, 4, 10);
    }
  };
  
  this.show = function(){
    strokeWeight(map(this.z, 0, 20, 4, 10));
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + this.len)
  };

}
