const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImage = loadImage("./assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle=-PI/4;

  var options = {
    isStatic:true
  }
  
  ground = Bodies.rectangle(0,590,0,0,options)
  World.add(world,ground)

  tower = Bodies.rectangle(80,200,0,0,options)
  World.add(world,tower)

  cannon = new Cannon(180,110,110,50,angle);
  cannon1 = new Cannon(280,110,110,50,angle);
  cannon2 = new Cannon(380,110,110,50,angle);
}

function draw() {
  background(189);
  image(backgroundImage,0,0,1200,600);
  Engine.update(engine);

 rect(ground.position.x,ground.position.y,1200,1);
 image(towerImage,tower.position.x,tower.position.y,160,320);

 //arc(150,200,140,200,PI,TWO_PI);
 //using 
 
  cannon.display();
  cannon1.display();
  cannon2.display();

 //push();
 //translate(180,110);
 //rotate(angle);
 //rect(-10,-20,110,50);
 //pop();
}
