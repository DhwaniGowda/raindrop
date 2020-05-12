var rainDropGroup;
var rainImage;

function preload(){
  rainImage = loadImage("rain.png");

}

function setup() 
{
  createCanvas(800,800);
  
  rainDropGroup = new Group();
}

function draw() 
{
  background("black");;  
  drawSprites();
  rainDrop();
}




function rainDrop() 
{
  if (frameCount % 10 === 0)
  {
    var rain = createSprite(0,0,40,40);
    rain.x = Math.round(random(0,800));
    rain.velocityY = 10;
    rain.addImage(rainImage);
    rain.scale = .1;
    rain.lifetime = 160;
    
    rainDropGroup.add(rain);
  }
  
}