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

	body1 = Bodies.rectangle(320,600,16,140,{isStatic:true});
	body2 = Bodies.rectangle(389,655,150,15,{isStatic:true});
	body3 = Bodies.rectangle(470,600,16,140,{isStatic:true});

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

	packageBody = Bodies.rectangle(width/2 , 200 , 35, 35 , {restitution:0.3, isStatic:true});
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
  rectangle1.x = body1.position.x;
  rectangle1.y = body1.position.y;
  rectangle2.x = body2.position.x;
  rectangle2.y = body2.position.y;
  rectangle3.x = body3.position.x;
  rectangle3.y = body3.position.y;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	Matter.Body.setStatic(packageBody,false);
  }
}



