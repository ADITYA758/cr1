var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
var car,log;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  


  for (var i = 0;i<6;i++)
  {
    var bg1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
      var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
      road.shapeColor="black";
    }
    bg1.shapeColor="green";
    
  }

  for (var i = 0;i<40;i++)
  {
    car = new Car(2);
  }

  for (var i = 0;i<40;i++)
  {
    log = new Log(2);
  }

 }

function draw() 
{
  background("skyblue");
 
 

  drawSprites();
}

