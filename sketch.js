function preload(){
  planeImg = loadImage("assets/plane_preview.png")
  skyImg = loadImage("assets/sky1.png")
  spaceImg = loadImage("assets/outerspace.jpg")
  explosionImg = loadImage("assets/Explosion1.gif")
  meteorImg = loadImage("assets/meteor1.gif")
}
function setup(){
  createCanvas(600,700)

  space = createSprite(width/2,height/2)
  space.addImage(spaceImg)
  space.velocityY=-3;
  space.scale=2.5
  plane = createSprite(100,575);
  plane.addImage(planeImg);
  plane.scale=.5;
 

}

function draw(){
  background(0)
  plane.x=mouseX
  if(space.y>height/2-50){
    space.y=space.height/2+50
  }
  drawSprites()

}