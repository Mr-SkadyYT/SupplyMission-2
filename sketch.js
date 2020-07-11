var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var rectangle1, rectangle2, rectangle3;
var packageBody,ground
var options
{
	restitution = 0.1;
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rectangle1=createSprite(320,600,16,140);
	rectangle1.shapeColor=color("red");
	rectangle2=createSprite(389,655,150,15);
	rectangle2.shapeColor=color("red");
	rectangle3=createSprite(470,600,16,140);
	rectangle3.shapeColor=color("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody,false);
  }
}



