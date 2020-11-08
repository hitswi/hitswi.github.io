var menuimg, gameimg, endimg, plasticimg;
var mode = 0; //determine whether the game has started
var plastic1x = 300;
var plastic1y = 300;
var plasticSize1 = 100;

var plastic2x = 300;
var plastic2y = 300;
var plasticSize2 = 100;

var plastic3x = 300;
var plastic3y = 300;
var plasticSize3 = 100;

var score =0;

function preload(){
  menuimg = loadImage('assets/startingmenu.png');
  gameimg = loadImage('assets/gameplay.png');
  endimg = loadImage('assets/endgame.png');
  plasticimg = loadImage('assets/plasticcursor.png');
  plastic1 = loadImage('assets/plastic1.png');
  plastic2 = loadImage('assets/plastic2.png');
  plastic3 = loadImage('assets/plastic3.png');
}

function setup() {
  mode = 0; //initally the game has not started
  createCanvas(800,800);
  textSize(21);  
  textAlign(CENTER);
  menuimg.loadPixels();
  gameimg.loadPixels();
  startMenu();
} //end of the setup


function draw() {
  if (mode==1) {
    levelOne();
  }
  else if (mode==2){
    levelTwo();
  }
  else if (mode==3){
    levelThree();
  }
  else if (mode==4){
    endGame();
  }
} // end of draw

function startMenu() {
  image(menuimg, 0, 0);
  rect(300,375,200,40,10);
  text('Press Enter to start',400,400);
} //end of startmenu

function keyPressed() {
  if (keyCode===ENTER) {
     mode=1;
  }
}

function levelOne(){
  image(gameimg, 0, 0);
  text(("Number of Plastics " + score), width/2, 40);
  
  text("Catch the plastic! ", width/2, height-20);
  image(plastic1, plastic1x-(plasticSize1/2), plastic1y-(plasticSize1/2), plasticSize1, plasticSize1);
  var distToBall= dist(plastic1x, plastic1y, mouseX, mouseY);
  if (distToBall <plasticSize1/2){
    plastic1x = random(5,width-5);
    plastic1y= random(200,height-5);
    score= score +1;
  }
  if(score>5){
    mode=2;
  }

} // end level one

function levelTwo(){
  image(gameimg, 0, 0);
  text(("Number of Plastics " + score), width/2, 40);
  
  text("Catch the plastic! ", width/2, height-20);
  image(plastic2, plastic2x-(plasticSize2/2), plastic2y-(plasticSize2/2), plasticSize2, plasticSize2);
  var distToBall= dist(plastic2x, plastic2y, mouseX, mouseY);
  if (distToBall <plasticSize2/2){
    plastic2x = random(5,width-5);
    plastic2y= random(200,height-5);
    score= score +1;
  }
  if(score>10){
    mode=3;
  }

} // end level two

function levelThree(){
  image(gameimg, 0, 0);
  text(("Number of Plastics " + score), width/2, 40);
  
  text("Catch the plastic! ", width/2, height-20);
  image(plastic3, plastic3x-(plasticSize3/2), plastic3y-(plasticSize3/2), plasticSize3, plasticSize3);
  var distToBall= dist(plastic3x, plastic3y, mouseX, mouseY);
  if (distToBall <plasticSize3/2){
    plastic3x = random(5,width-5);
    plastic3y= random(200,height-5);
    score= score +1;
  }
  if(score>15){
    mode=4;
  }
} // end level three

function endGame(){
  image(endimg, 0, 0);
  
} //final
