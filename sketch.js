var car , wall;
var speed,weight;




function setup() {
  createCanvas(1100,400);
 car = createSprite(200, 200, 50, 50);
 car.shapeColor="green";
 wall = createSprite(990,200,60,300);
 wall.shapeColor="green";

car.velocityX=5;

speed=random(25,31);
weight=random(25,31);


}

function draw() {
  background("black");  

if (wall.x-car.x<(car.width+wall.width/2)){
  
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180){
    car.shapeColor="green";
    wall.shapeColor="green";
  }
if(deformation < 180 && deformation > 100){
  car.shapeColor="red";
  wall.shapeColor="red";
}
if (deformation<100){
car.shapeColor="red";
wall.shapeColor="red";


}




}





  drawSprites();
}