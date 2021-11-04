class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    //se guardan posición y ángulos
    var pos =this.body.position;
    var angle = this.body.angle;
    //corre la nueva configuración
    push (); 
    translate (pos.x, pos.y);
    rotate (angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    //Regresa a la anterior configuración
    pop();
  }
};
