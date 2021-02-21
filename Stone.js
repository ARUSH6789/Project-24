class Stone{
    constructor(x,y){ //properties
        var options = {
            restitution:1.0,
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,90,90,options);
        this.width = 90;
        this.height = 90;
        World.add(world,this.body);
    }

    //functions
    display(){
        //nickname
        var pos = this.body.position;
        

        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        stroke("black");
        fill("black")
        rect(0,0,this.width,this.height);
        pop()
    }
}