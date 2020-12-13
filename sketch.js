var PLAY =1;
var END=0;
var gameState=1;
var sword;
var score;

function preload(){
  swordImage = loadImage("sword.png");
  fruit1Image= loadImage("fruit1.png");
  fruit2Image= loadImage("fruit2.png");
  fruit3Image= loadImage("fruit3.png");
  fruit4Image= loadImage("fruit4.png");
  alien1Image= loadImage("alien1.png");
  alien2Image= loadImage ("alien2.png");
  gameOverImage=loadImage ("gameover.png");
  
}
function setup(){
  createCanvas(600,600);
  
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage);
  sword.scale=0.7
  sword.setCollider("rectangle",0,0,40,40);
  score=0
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
  
}
function draw(){
 background("lightblue") ;
  
  if(gameState===PLAY){
  
    text("score:"+score,300,30)
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2
    }
    if(enemyGroup.isTouching(sword)){
      gameState=END
    }}
if(gameState===END){
  fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  fruitGroup.setVelocityXEach(0)
  enemyGroup.setVelocityXEach(0)  
  
  sword.addImage(gameOverImage);
  sword.x=200
  sword.y=200
  
  text("score:"+score,300,30)
}
  Monster();
  spawnfruits();
drawSprites();

}
function spawnfruits(){
 if (frameCount % 60 === 0){
   var fruit = createSprite(600,165,10,40);
   fruit.velocityX = -(6 + score/100);
   fruit.y=Math.round(random(50,350))
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: fruit.addImage(fruit1Image);
              break;
      case 2: fruit.addImage(fruit2Image);
              break;
      case 3: fruit.addImage(fruit3Image);
              break;
      case 4: fruit.addImage(fruit4Image);
              break;
      
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    fruit.scale = 0.2;
    fruit.lifetime = 300;
   
   //add each obstacle to the group
    fruitGroup.add(fruit);
 }
}

function Monster(){
  if (frameCount % 150 === 0){
   var monster = createSprite(600,165,10,40);
    monster.addImage(alien1Image);
   monster.velocityX = -(6);
   monster.y=Math.round(random(50,350))
  enemyGroup.add(monster);
  
  
  
  
  
  
  
}}