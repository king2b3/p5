let w_colors = ["#5c58bd", "#b957ce", "#5994ce", "#3a4e93", "#2c2e3b"]

class Windows{
    constructor(x, y, w, h) {
    this.height = h;
    this.width = w;
    this.color = random(w_colors);
    this.x = x;
    this.y = y;

  }
  
  show(){
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }
  

  update(displacement){
      this.x -= displacement;
  }
  
}
