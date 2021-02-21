class Hammer{
    constructor(x,y){ //properties
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x,y,150,50,options);
        this.width = 150;
        this.height = 50;
        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("red");
        fill("yellow")
        rect(0,0,this.width,this.height);
        pop()
    }
}