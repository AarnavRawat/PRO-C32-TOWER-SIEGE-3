//Tower Seige Game
//declare variables for the behaviour indicators <FLAGS>
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var userEngine,userWorld;
var gameState;
var polygon,sling;
var canvas;
var score;
var backgroundImg
var ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25;

function setup(){
    //creating the canvas
    canvas = createCanvas(1600,600);

    userEngine = Engine.create();
	userWorld = userEngine.world;
    //giving values to the variables
    ground1 = new Ground(650,305,300,20);
    ground2 = new Ground(1050,235,250,20);

    gameState = 'onSling';
    polygon = new Polygon(150,225,20);
    sling = new String(polygon.body,{x:150,y:225})
    
    //first layer
    block1 = new Block(ground1.x+10,ground1.y-30,4);
    block2 = new Block(ground1.x+40,ground1.y-30,4);
    block3 = new Block(ground1.x+70,ground1.y-30,4);
    block4 = new Block(ground1.x+100,ground1.y-30,4);
    block5 = new Block(ground1.x+130,ground1.y-30,4);
    block6 = new Block(ground1.x+160,ground1.y-30,4);
    block7 = new Block(ground1.x+190,ground1.y-30,4);
    //second layer
    block8 = new Block(ground1.x+40,ground1.y-70,1);
    block9 = new Block(ground1.x+70,ground1.y-70,1);
    block10 = new Block(ground1.x+100,ground1.y-70,1);
    block11 = new Block(ground1.x+130,ground1.y-70,1);
    block12 = new Block(ground1.x+160,ground1.y-70,1);
    //third layer
    block13 = new Block(ground1.x+70,ground1.y-110,3);
    block14 = new Block(ground1.x+100,ground1.y-110,3);
    block15 = new Block(ground1.x+130,ground1.y-110,3);
    //top
    block16 = new Block(ground1.x+100,ground1.y-150,3);
    //first layer
    block17 = new Block(ground1.x+20,ground1.y-15,4);
    block18 = new Block(ground1.x+50,ground1.y-15,4);
    block19 = new Block(ground1.x+80,ground1.y-15,4);
    block20 = new Block(ground1.x+110,ground1.y-15,4);
    block21 = new Block(ground1.x+140,ground1.y-15,4);
    //second layer
    block22 = new Block(ground1.x+50,ground1.y-55,1);
    block23 = new Block(ground1.x+80,ground1.y-55,1);
    block24 = new Block(ground1.x+110,ground1.y-55,1);
    //top
    block25 = new Block(ground1.x+80,ground1.y-95,3);

    //score
    score=0;

}

function draw(){
    if (backgroundImg){ 
        background(backgroundImg);
      }
      else{
        background(0);
      }
    Engine.update(userEngine);

    ground1.display();
    ground2.display();

    polygon.display();
    sling.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();

    if(gameState == 'release'){
        block1.score();
        block2.score();
        block3.score();
        block4.score();
        block5.score();
        block6.score();
        block7.score();
        block8.score();
        block9.score();
        block10.score();
        block11.score();
        block12.score();
        block13.score();
        block14.score();
        block15.score();
        block16.score();
        block17.score();
        block18.score();
        block19.score();
        block20.score();
        block21.score();
        block22.score();
        block23.score();
        block24.score();
        block25.score();
    }
    text("SCORE : "+score,750,40);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
    sling.detach();
    gameState = 'release';
}

function KeyPressed(){
    if (keyCode == 32){
        sling.attach(polygon.body);
    }
}

async function setBackgroundImg() {
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    console.log("response: "+response);
  
  
    var responseJSON = await response.json();
    console.log("responseJSON: "+responseJSON);
  
    var datetime = responseJSON.currentDateTime;
    var hour = datetime.slice(11, 13);
  
    if (hour >= 06 && hour <= 18) {
      bgImg = "day.png";
    } else {
      bgImg = "night.jpg";
    }
  
    backgroundImg = loadImage(bgImg);
    console.log(backgroundImg);
  }