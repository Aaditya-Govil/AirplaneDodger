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
  space.velocityY=+1;
  space.scale=2.75
  plane = createSprite(100,575);
  plane.addImage(planeImg);
  plane.scale=.5;
   gameSound=createAudio("assets/gamesounds.wav");
  gameSound.volume(0.1
  )
 
}

function draw(){
  background(0)
  plane.x=mouseX
  if(space.y>425){
    space.y=375

  }

  gameSound.play();
  obstacles()
  drawSprites()

}

function obstacles(){
  if(frameCount % 80===0){
  meteor = createSprite(random(0,width),0)
  meteor.addImage(meteorImg);
  meteor.velocityY=5;
  meteor.velocityX=-2;
  meteor.scale=0.08;
  }
  if(frameCount % 100===0){
    meteor = createSprite(650,random(50,350))
    meteor.addImage(meteorImg);
    meteor.velocityY=5;
    meteor.velocityX=-2;
    meteor.scale=0.08;
  }

}
