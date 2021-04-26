const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1;
var vulImg

function preload(){
    backgroundImg = loadImage("Super back.jpg")
    vulImg = loadImage("vulture.png")
}

function setup(){
    var canvas = createCanvas(1300, 725);
    engine = Engine.create();
    world = engine.world;

    villian1 = new Vulture(800,100,200,300);
    villian2 = new Electro(800,400,150,200);
    villian3 = new Sandman(600,400,200,200);
    villian4 = new Mysterio(600,100,150,200);
    villian5 = new Kraven(600,0,200,200);
   

    

    ground = new Ground(0, 600, width+width/2+1000, 25);

    monster = new Monster(1100, 500, 150)

    ball = new Hero(200, 200, 80);

    rope = new Rope(ball.body, {x:300, y:50})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    villian1.display();
    villian2.display();
    villian3.display();
    villian4.display();
    villian5.display();
   
    ball.display();

    monster.display();

    ground.display();

    if(monster.x >= 1300){
        textSize(50)
        text("YOU WON",500,500)
      }

    fill(37, 247, 58);
    stroke("black")
    strokeWeight(2);
    textSize(50)
    text("KILL THE MONSTER", 500, 700)
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY})
}
