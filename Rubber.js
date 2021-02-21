class Rubber{
    constructor(x,y){ //properties
        var options = {
            restitution:0.9,
            isStatic : false
            
        }

        this.body = Bodies.circle(x,y,30,options);
        this.radius = 50;

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
        fill("blue")
        ellipse(0,0,this.radius);
        pop()
    }
}