const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, ground;
var box1,box2;

function setup() {
  createCanvas(800,800);

  engine = Engine.create()
  world = engine.world;
  var groundOption = {
    isStatic: true
  }
  ground = Bodies.rectangle(400,800,800,50,groundOption)
  
  World.add(world, ground)
  console.log(ground)

  box1 = new Box(400,100,50,50)
  box2 = new Box(410,50,50,100)

}

function draw() {
  background("black");  

  Engine.update(engine)
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,50);

  box1.display();
  box2.display();

  //Matter.Body.setisStatic(a,true)
}