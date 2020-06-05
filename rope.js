class Rope {
    constructor(Body1,Body2,offsetX,offsetY) {
       this.offsetX = offsetX;
       this.offsetY = offsetY;
        var options ={
            bodyA: Body1,
            bodyB: Body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight(4);
        line(pointA.x, pointA.y, pointA.x, pointB.y+5);
        pop();
    }
        
}