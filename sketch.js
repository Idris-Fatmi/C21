var fixedRect, movingRect;
var gameObject1;
var gameObject2;
var gameObject3;
var gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1=createSprite(600,200,90,20)
  gameObject1.shapeColor = ("orange")
  gameObject1.debug = true;
  gameObject2 = createSprite(400,500,100,15)
  gameObject2.shapeColor = ("blue")
  gameObject2.debug = true;
  gameObject3 = createSprite(450,400,80,25)
  gameObject3.shapeColor = ("brown")
  gameObject3.debug = true
  gameObject4 = createSprite(500,450,80,30)
  gameObject4.shapeColor = ("cyan")
  gameObject4.debug = true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject3.shapeColor = "brown";
  }

  bounceoff(movingRect,gameObject4)
  drawSprites();
}

