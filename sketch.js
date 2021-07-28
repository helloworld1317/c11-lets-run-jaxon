
function preload(){
  //pre-load images
  var pathImg=loadImage("path.png");
  var boy_1=loadImage("Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var boy=createSprite(200,200,10,10);
  boy.addImage(boy_1);

var path = createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

if (path.y>400){
  path.y=height/2;
}


boy.x=mouseX
boy.y=mouseY
}

function draw() {
  background("black");
  edges=createEdgeSprites();
  boy.collide(edges);

drawSprites();
}
