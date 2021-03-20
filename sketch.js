

function setup() {
  
  createCanvas(1000,1000);
  edges=createEdgeSprites();

  player=createSprite(40,500,40,40);
  target=createSprite(500,40,40,40);
  
 obs1=createSprite(0,320,200,20);
 obs2=createSprite(500,350,180,20);
 obs3=createSprite(850,280,200,20);
 obs4=createSprite(0,120,200,20);
 obs5=createSprite(500,80,200,20);
 obs6=createSprite(850,150,200,20);


  player.shapeColor="red";
  target.shapeColor="green";
  obs1.shapeColor="yellow";
  obs2.shapeColor="yellow";
  obs3.shapeColor="yellow";
  obs4.shapeColor="cyan";
  obs5.shapeColor="cyan";
  obs6.shapeColor="cyan";

 obs1.velocityX=4;
 obs2.velocityX=4;
 obs3.velocityX=4;
 obs4.velocityX=-4;
 obs5.velocityX=-4;
 obs6.velocityX=-4;
 
 
}

function draw() {
  background("black");  

  player.x=mouseX;
  player.y=mouseY;

  obs1.bounceOff(edges[1])
  obs1.bounceOff(edges[0])
  obs2.bounceOff(edges[1])
  obs2.bounceOff(edges[0])
  obs3.bounceOff(edges[1])
  obs3.bounceOff(edges[0])
  obs4.bounceOff(edges[1])
  obs4.bounceOff(edges[0])
  obs5.bounceOff(edges[1])
  obs5.bounceOff(edges[0])
  obs6.bounceOff(edges[1])
  obs6.bounceOff(edges[0])

  textSize(50);
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
if(player.isTouching(obs3)){
  obs3.velocity=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs4)){
  obs4.velocity=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs5)){
  obs5.velocity=0;
  text("YOU LOSE",200,200);
}
if(player.isTouching(obs6)){
  obs6.velocity=0;
  text("YOU LOSE",200,200);
}
  drawSprites();
  
}
