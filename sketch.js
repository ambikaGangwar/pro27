
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob,bob4,bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	bob1 = new Bob(300,350,10)
	bob2 = new Bob(350,350,10)
	bob3 = new Bob(400,350,10)
	bob4 = new Bob(450,350,10)
	bob5 = new Bob(500,350,10)
	roof = new Roof(400,200,380,15)
	rope1 = new Rope1(300,400,50,5)
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
roof.display();
rope1.display();
  drawSprites();
 
}



