var person,person_img;
var traffic_light;
var traffic_light_red,traffic_light_green;
var traffic_light_red_img,traffic_light_green_img;
var traffic_light_stand;
var backgroundImg;
var obstacle1,obstacle2,obstacle3;
var obstaclesGroup1X,obstaclesGroup2Y;
var invisibleGround;
var gameState = "start";
var carGroup;

function preload()
{
	backgroundImg = loadImage("background_img_.jpg");
	traffic_light_red_img = loadImage("Traffic lights/Traffic_light_red_image.jpeg");
	traffic_light_green_img = loadImage("Traffic lights/Traffic_light_green_image.jpeg");
	person_img = loadImage("persons/person_img_1.webp");
	obstacle1 = loadImage("obstacles/animal_image_1.webp");
	obstacle2 = loadImage("obstacles/car image.webp");
	obstacle3 = loadImage("obstacles/Scooty_image_!.webp");
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	person = createSprite(700,650,50,100);
	person.addImage(person_img);
	person.scale = 0.3;

	traffic_light = createSprite(1400,250,50,50);
	traffic_light.addImage(traffic_light_red_img);
	traffic_light.scale = 0.2;

	traffic_light_stand = createSprite(1400,440,20,205);
	traffic_light_stand.shapeColor = "black";

	carGroup = new Group();

	//invisibleGround = createSprite(750,350,100,700);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImg);

if(keyDown(RIGHT_ARROW)&&gameState === "start"){
	person.y = person.y - 5;
	//person.x = 0;
	if(person.y === 350){
		gameState = "stop";
	}
}

if(frameCount % 100 === 0){
	traffic_light.addImage(traffic_light_green_img);
}

//person.collide(invisibleGround);



level1();

  drawSprites();
  if(carGroup.isTouching(person)){
	  console.log("CAR COLLIDED")
	textSize(40);
	textFont("Comic");
	fill("red");
	text("GAME OVER!!! BE CAREUL WHILE CROSSING THE ROAD",600,350);
   }
}

function level1(){
	if(frameCount%300 === 0){
		var obstacle = createSprite(random(200,700),500);
		obstacle.addImage(obstacle2);
		obstacle.scale = 0.5;
		obstacle.velocityX = 2;
		carGroup.add(obstacle);
	}
}