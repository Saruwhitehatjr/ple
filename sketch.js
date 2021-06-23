
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Boy,Tree;
function preload()
{
 treeImg = loadImage("tree.png");
 boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1300,600);

Boy = createSprite(240,540,40,20)
Boy.addImage(boyImg)
Boy.scale=0.16

Tree = createSprite(1000,300,50,50)
Tree.addImage(treeImg);
Tree.scale=0.5

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);

	ground= new Ground(650,590,width,20);
	mango1=new Mango(1100,100,30);
	mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,70,30);
	mango5=new Mango(1100,70,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(900,160,40);
	stone=new Stone(247,442);
	launcher = new Launcher({x:150,y:450},stone.body)	

	detectollision(stone,mango1);
detectollision(stone,mango2);
detectollision(stone,mango3);
detectollision(stone,mango4);
detectollision(stone,mango5);
detectollision(stone,mango6);
detectollision(stone,mango7);
detectollision(stone,mango8);
detectollision(stone,mango9);
detectollision(stone,mango10);
detectollision(stone,mango11);
detectollision(stone,mango12);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone.display()
  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  drawSprites();
}
function mouseDragged()
{
Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
launcher.fly();
}
function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.r+lstone.r)
	{
	Matter.Body.setStatic(lmango.body,false);
	}
	}

	function keyPressed()
{
if (keyCode === 32) {
Matter.Body.setPosition(stone.body, {x:235, y:420})
launcher.attach(stone.body);
}
}


