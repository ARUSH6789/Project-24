class Rectangle{
    constructor(x,y){ //properties
        var options = {
            restitution:0.9,
            isStatic : false
        }
        this.body = Bodies.rectangle(x,y,70,70,options);
        this.width = 70;
        this.height = 70;
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
        fill("red")
        rect(0,0,this.width,this.height);
        pop()
    }
}