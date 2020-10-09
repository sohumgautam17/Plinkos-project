const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, division, division1, division2, division3, division4, division5, division6, plinkos;

var particles = [];
var  plinkos = [];

var divisions = [];


var divisionHeight =300;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 670, 240, 10);

  division = new Division(115, 575, 10, 200);
  division1 = new Division(165, 575, 10, 200);
  division2 = new Division(215, 575, 10, 200);
  division3 = new Division(265, 575, 10, 200);
  division4 = new Division(315, 575, 10, 200);
  division5 = new Division(365, 575, 10, 200);
 
  //plinkos = new Plinko(40, 40, 40, 40);

  

  
}

function draw() {
  background("black"); 
  ground.display(); 
  division.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  for (var j = 40; j <width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }
 // plinkos.display();
}