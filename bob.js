class Bob {
    constructor(x,y,radius){
        var options ={
            isStatic: true,
            restitution: 1,
            friction: 0,
            density: 0.8 
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.X = x;
        this.Y = y;
        
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
       
        push();
        translate(pos.x,pos.y);
        ellipse(0, 0, radius,radius);
        
      pop();
    }
}