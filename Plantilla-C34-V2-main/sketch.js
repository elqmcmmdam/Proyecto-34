//Se supone que al darle clic al botón, la pelota debería subir, pero no lo hace, no se que hice mal

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var button;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,height-10,width,20);
  ball = new Ball(width/2, height-350, 60, 60);
  button = createButton("click aquí");
  button.position(width/2-150,height/2);

  button.mousePressed(hit);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  ball.show();

}

function hit() {
  Matter.Body.applyForce(ball.body, {x:0, y:0}, {x:0, y:-0.05});
}