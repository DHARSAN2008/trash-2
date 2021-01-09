
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin,ground;
var box1,box2,box3;

function preload(){

  dImage=loadImage("dustbingreen.png")
}


function setup() {
  createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ground = new Ground(400,690,800,10)

  paper=new Paper(100,50,24);

	box1=new Dustbin(700,680,90,10);
	box2=new Dustbin(750,617,10,130);
	box3=new Dustbin(650,617,10,130);

  dustbin=createSprite(700,620,20,20);
  dustbin.addImage(dImage)
  dustbin.scale=0.4
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-30});
  }
}

