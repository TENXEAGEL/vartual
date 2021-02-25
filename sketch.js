//variables here
var dogimg,dog;

function preload()
{
dogimg = loadImage("dogimg.png");
}

function setup() {
	createCanvas(800, 800);
  dog = createSprite(300,180,400,20);
  dog.addImage("dogimg.png",dogimg)
}


function draw() {  
camera.x = dog.x;
 background(225);
 text("prees up arow to start",100,400)

  drawSprites();
  //add styles here

}



