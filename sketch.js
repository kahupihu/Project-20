
var car, wall, weight, speed, deformation;
var white, yellow, green, red;

function preload(){
  white=loadAnimation("whitecar.png");
  yellow=loadAnimation("yellowcar.png");
  red=loadAnimation("redcar.png");
  green=loadAnimation("greencar.png");
}

function setup() {
  createCanvas(1600,400);

  car=createSprite(150, 200, 5, 80);
  car.addAnimation("normal",white);
  car.addAnimation("perfect",green);
  car.addAnimation("ok",yellow);
  car.addAnimation("broken",red);
  car.scale=0.9;
  car.width=310;
  
  wall=createSprite(1500,200,60,height/2);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));
}

function draw() {
  background(0);  
  drawSprites();

  textSize(16);
  fill("white");
  text("Speed= "+speed,15,22);
  text("Weight= "+weight,15,40);
  text("Deformation= "+deformation,15,57);

  //Following are for debugging the program   ------->
  //console.log(World.mouseX+" , "+World.mouseY);   //This one is my favourite... It gives you the best code.org feature of tracking your pointer!
  //console.info (wall.x-car.x);
  //console.warn((car.width+wall.width)/2);
  //console.log(car.width);

  if(  (wall.x-car.x)  <  (car.width+wall.width)/2   ){
    wall.shapeColor="red";
    car.velocityX=0;
    deformation=Math.round((0.5*weight*speed*speed)/22500);
  }
  else{
    car.velocityX=speed;
    wall.shapeColor="green"; 
  }

  if(deformation<100 && deformation>0){car.changeAnimation("perfect",green); car.scale=0.5;}
  else if(deformation<180 && deformation>100){car.changeAnimation("ok",yellow); car.scale=0.5;}
  else if(deformation>180){car.changeAnimation("broken",red); car.scale=0.5;}
}