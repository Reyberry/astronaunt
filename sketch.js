

 function preload() {
 bg= loadImage("images/iss.png");
 sleep = loadAnimation("images/sleep.png");
 gym = loadAnimation("images/gym21.png","images/gym22.png");
 eat = loadAnimation("images/eat1.png","images/eat2.png");
 move = loadAnimation("images/move.png","images/move1.png");
 }





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);




  astronaunt = createSprite(300,230);
  astronaunt.addAnimation("sleeping",sleep);
  astronaunt.scale = 0.1;





  createEdgesprites()




}


text("instructions:",20,30);
 


if(keyDown("UP_ARROW")){
astronaunt.addAnimation("brushing",brush);
astronaunt.changeAnimation("brushing");
astronaunt.y = 350;
astronaunt.velocityX = 0;
astronaunt.velocityY = 0;
}


function draw() {
  background(255,255,255);  
  drawSprites();
}