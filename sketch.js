var ground;
var rubber;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 830);

	groundSprite=createSprite(width/2,height-6,width,30);
	groundSprite.shapeColor = "red"
	
	engine = Engine.create();
	world = engine.world;

	
	//create a ground
	ground = Bodies.rectangle(width/2,800,width,10, {isStatic:true} );
	World.add(world,ground);
	
	
	
	
	//make circlebody;

	
	Engine.run(engine);

	hammer = new Hammer(100,100);
	rubber = new Rubber(900,600);
	stone = new Stone(600,600);
	particles = new Particles(370,790);
	particle2 = new Particle2(348,600);
	particle3 = new Particle3(326,668);
	particle4 = new Particle4(308,668);
	particle5 = new Particle5(286,668);
	rectangle = new Rectangle(140,500);
	ground = new Ground(500,810);
}


function draw() {
  rectMode(CENTER);
  background("pink");
  



	

	hammer.display();
	rubber.display();
	stone.display();
	particles.display();
	particle2.display();
	particle3.display();
	particle4.display();
	particle5.display();
	rectangle.display();
	ground.display();
	drawSprites();
 
}



