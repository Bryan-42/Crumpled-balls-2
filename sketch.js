
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper,leftS,middle,rightS;
var dust_bin, paper_image;
var dustbin;

function preload(){
	dust_bin = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(120,400,80,80);

	ground = new Ground(400,650,800,20);

	leftS = new Dustbin(530,550,20,180);
	middle = new Dustbin(610,630,140,20);
	rightS = new Dustbin(690,550,20,180);
	dustbin = createSprite(610.5,550,180,180);
	dustbin.addImage(dust_bin);
	dustbin.scale = 0.70;

	Engine.run(engine);
  
}


function draw() {
  background(211,211,211);
  Engine.update(engine);
  paper.display();
  ground.display();
  leftS.display();
  middle.display();
  rightS.display();
  dustbin.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:90,y:-120})
	}
}