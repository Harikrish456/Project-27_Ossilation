
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3, bobObject4;
var roof;
var rope1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,200,300,10);

	bobObject1 = new Bob(400,400,50);
	bobObject2 = new Bob(450,400,50);
	bobObject3 = new Bob(350,400,50);
	bobObject4 = new Bob(300,400,50);

	rope1 =new Rope(bobObject1.body,roof.body);
    rope2 =new Rope(bobObject2.body,roof.body);
	rope3 =new Rope(bobObject3.body,roof.body);
    rope4 =new Rope(bobObject4.body,roof.body);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();  
  bobObject4.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  text("hiyy",400,50);
  keyPressed();
  text("yyy",500,100);
  console.log("bobObject1");
  Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50,y:-45});
}


function keyPressed(){
	stroke("yellow");
  text("hi",400,1);
  console.log("keyPressed");
	
	//if (keyCode === UP_ARROW){
    stroke("red");
    console.log("UP_ARROW")
    //var paperObject = bobObject1;    
		
//	}
}




