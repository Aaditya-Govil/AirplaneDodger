var score
function preload() {
  planeImg = loadImage("assets/plane_preview.png");
  skyImg = loadImage("assets/sky1.png");
  spaceImg = loadImage("assets/outerspace.jpg");
  explosionImg = loadImage("assets/Explosion1.gif");
  meteorImg = loadImage("assets/meteor1.gif");
}
function setup() {
  createCanvas(600, 700);
  gameState = "wait";
  space = createSprite(width / 2, height / 2);
  space.addImage(spaceImg);
  space.velocityY = +1;
  space.scale = 2.75;

  plane = createSprite(100, 575);
  plane.addImage(planeImg);
  plane.scale = 0.5;

  gameSound = createAudio("assets/gamesounds.wav");
  gameSound.volume(0.1);

  meteorGroup = new Group();
  if (gameState === "wait") {
    background(spaceImg);
    input = createInput("").attribute("placeholder", "Enter the name");
    input.position(width / 2 - 100, height / 2 - 100)
    input.class("customInput")
    button = createButton("PLAY");
    button.position(width / 2 - 85, height / 2 - 50)
    console.log(input.value());
    if (input.value() !== undefined) {
      button.mousePressed(function () {
        gameState = "play";
      });
    }
    button.class("playButton")
    gameTitle = createElement("h2");
    gameTitle.position(width / 2 - 150, 50)
    gameTitle.class("gameTitle")
    gameTitle.html("Airplane Dodger")
  }
  score=0;
}

function draw() {
  if (gameState === "play") {
    background(0);
    text("Score: " + score, 50, 50);
    textSize(24);
    score = score + Math.round(getFrameRate()/60);
    playerName = createElement("h6");
    playerName.position(10, 0)
    playerName.class("playerName")
    playerName.html(input.value());
    hideElements()
    plane.x = mouseX;
    if (space.y > 425) {
      space.y = 375;
    }
    gameSound.play();
    obstacles();
    drawSprites();
  }


}

function obstacles() {
  if (frameCount % 80 === 0) {
    meteor = createSprite(random(0, width), 0);
    meteor.addImage(meteorImg);
    meteor.velocityY = 5;
    meteor.velocityX = -2;
    meteor.scale = 0.08;
    meteorGroup.add(meteor);
    meteor.lifetime = 150;
    meteorGroup.meteor= createSprite(100,100,width/2-100,height/2+100);
    meteorGroup.velocityX = -(4+score/1000);
    

  }
  if (frameCount % 100 === 0) {
    meteor = createSprite(650, random(50, 350));
    meteor.addImage(meteorImg);
    meteor.velocityY = 5;
    meteor.velocityX = -2;
    meteor.scale = 0.08;
    meteorGroup.add(meteor);
    meteor.lifetime = 150;
  }


}
function hideElements() {
  gameTitle.hide()
  button.hide()
  input.hide()
}
