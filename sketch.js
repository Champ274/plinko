const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;
var Divisions=[]
function setup() {
  createCanvas(400,600);
  engine = Engine.create();
world = engine.world;
Engine.run(engine)
ground1=new Ground(200,590,400,20)
//division1=new divisions(200,500,10,200)
for(var i =30; i<400;i=i+70){
  Divisions.push(new divisions(i,500,10,200))
}
}

function draw() {
  background('black');  
  drawSprites();
  ground1.display()
 // division1.display()j<
 for(var j=0;j<Divisions.length;j=j+1){
   Divisions[j].display
 }
}