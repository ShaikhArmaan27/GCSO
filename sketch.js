var car
var wall
var speed
var weight

function setup() {
  createCanvas(1600,400);  
  car = createSprite(50, 200, 30, 30);
  car.shapeColor = "white";
  wall = createSprite(1500,200,50,height/2);
  wall.shapeColor = "blue";
  speed=Math.round(random(55,100)) 
  weight=Math.round(random(400,1500)) 
}

function draw() {
  background(0,0,0); 
  car.velocityX = 9
  if(car.x - wall.x <= wall.width/2 + car.width/2 
    && wall.x - car.x <= car.width/2 + wall.width/2 ){
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
    
      if(deformation>180)
      {
        car.shapeColor=color(255,0,0);
      }
      if(deformation<180 && deformation>100)
      {
        car.shapeColor=color(230,230,0)
      }
      if(deformation<100)
      {
        car.shapeColor=color(0,255,0)
      }
  }
  drawSprites();
}
