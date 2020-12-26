
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var edge1,edge2,edge3;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(150,645,70,PI/2)
    edge1 = new Edges(465,560,20,180)
	edge2 = new Edges(550,640,150,20)
	edge3 = new Edges(635,560,20,180)
	ground = Bodies.rectangle(400,650,800,10,{isStatic:true})
	dustbin1 = new Dustbin(550,560,200,100)

    World.add(world,ground)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  push()
  fill("pink")
  rect(400,650,800,10)
  pop()
  paper1.display()
  dustbin1.display()
  push()
  strokeWeight(0)
  fill("white")
 edge1.display()
 edge2.display()
 edge3.display()
 pop()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


