
class crystal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display() {
    rotateY(angle2);
  angle2 += 0.002;
    
    push();
    translate(this.x, this.y);
   
    ambientLight(245, 245, 245,50);
    specularMaterial(255);

    stroke('white');
    cone(6, -12, 12);
    pop();
    
    push();
    translate(this.x, this.y+12);
    ambientLight(245, 245, 245,50);
    specularMaterial(255);
    stroke('white');
    cone(6, 12, 12);
    
    pop();

  }
}