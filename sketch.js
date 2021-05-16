const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg1,bg2,bg3;

function preload(){
  getBackgroundImg 
  bg1  = loadImage("sprites/snow1.jpg")
  bg2 = loadImage("sprites/snow2.jpg")
  bg3 = loadImage("sprites/snow3.jpg")
}



function setup() {
  createCanvas(800,400);
 engine = Engine.create();
 world = engine.world;
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
   
Engine.update(engine);
  drawSprites();
}
function getBackgroundImg(){
  if(keyDown (RIGHT_ARROW) ){
    bg1 = "sprites/snow1.jpg"
   }
    else if(keyDown (RIGHT_ARROW) ){
      bg2 = "sprites/snow2.jpg"
    }
    else if(keyDown (RIGHT_ARROW) ) {
      bg3 = "sprites/snow3.png"
    }
  }
