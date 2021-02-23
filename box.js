class Box {
  constructor(x, y, width, height,color) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.color = color;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   push ();
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
};
