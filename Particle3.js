class Particle3{
    constructor(x,y){ //properties
        var options = {
            restitution:0.2,
            isStatic : false
            
        }

        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;

        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
      
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("red")
        ellipse(0,0,this.radius);
        pop()
    }
}