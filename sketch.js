function setup() {
  createCanvas(1200,400);
 movingRect = createSprite(600,200,100,100);

 fixedRect = createSprite(700,300,100,100);
 gameObject = createSprite(700,100,100,100);
 movingRect.shapeColor = "green";
 fixedRect.shapeColor= "green";
 gameObject.shapeColor="yellow";
  
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2&&
    object2.x-object1.x<object1.width/2+object2.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object1.height/2+object2.height/2){
      return  true;
    }
    else{
      return false;}

}
function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y = World.mouseY;

gameObject.y=World.mouseY;
  if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor = "red";
 fixedRect.shapeColor= "red";
  }
  else if(isTouching(movingRect,gameObject)){
    gameObject.shapeColor="white";
    movingRect.shapeColor="white";
  }
  else if(isTouching(fixedRect,gameObject)){
    gameObject.shapeColor="pink";
    fixedRect.shapeColor="pink";
  }

  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    gameObject.shapeColor="yellow";
  }
  
  drawSprites();
}