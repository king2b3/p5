//city colors

let window_size = 20;

let colors = ["#5c58bd", "#b957ce", "#5994ce", "#3a4e93", "#2c2e3b"]

class Building {
    constructor(x) {
    this.height = randomHeight();
    this.width = randomWidth();
    this.x = x - this.width;
    this.y = height - this.height;
    this.color = random(colors);
      
    //windows
    this.windows = [];
    this.generateWindows();
  }
  
  show(){
    //building
    fill(this.color)
    rect(this.x, this.y, this.width, this.height)
  }
    
  update(displacement){
    if (this.x < -100){
      this.height = randomHeight();
      this.width = randomWidth();
      this.x = 100 + width - this.width;
      this.y = height - this.height;
      this.generateWindows();
    }
    else{
      this.x -= displacement;
    }
  }
  
  generateWindows(){
    this.windows = [];
    this.number_of_windows_wide = floor((this.width  - (0.5 * window_size))/(window_size));
    this.number_of_windows_high = floor(this.height / window_size);
    this.width_offset  = (((this.width  - (0.5 * window_size)) % window_size))/2;
    //this.width_offset  = (((this.width  - (0.5 * window_size)) % window_size)  + 0.5 * window_size)/2;
    this.height_offset = ((this.height % window_size) + 0.5 * window_size)/2;
    
    //console.log(this)

    let x_off = (0.5 * window_size);
    let y_off = 0;

    for (let i = 0; i < this.number_of_windows_high; i++){
        for (let j = 0; j < this.number_of_windows_wide; j++){
          //give window locations
          let w = new Windows(this.x + this.width_offset + x_off, 
                              this.y + this.height_offset + y_off, 
                              window_size/2, 
                              window_size/2);
          x_off += window_size;
          this.windows.push(w);

      }
      y_off += window_size;
      x_off = (0.5 * window_size);
    }
    
  }
}

function randomHeight(){
  return random(height * 0.3,height * 0.8)
}

function randomWidth(){
  return random(width/9,width/7.5)
}
