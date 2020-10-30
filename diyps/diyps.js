var img;
var initials ='tg'; // your initials
var choice = '1'; // starting choice, so it is not empty
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://hitswi.github.io/images/rabbit2.png');
}

function setup() {
createCanvas(1200, 900);  // canvas size
  // Define colors
  c1 = color(4, 17, 62);
  c2 = color(121, 25, 97);
  setGradient(c1, c2);

}
g
function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
  stroke(0, 0, 0, 0); //white
  keyTyped(); //type key for brush color
  // 'v' violet
  // 'i' light blue
  // 'p' pink
  // 'w' white
  // 'y' yellow

  //type 'c' to clear canvas

  spray(); //canvas click triggers spray
}

function spray() {
  let leftWall = 0;
  let rightWall = 1200;
  let topWall = 0;
  let bottomWall = 1200;
  if (mouseIsPressed) {
    for (let i = 0; i < 200; i++) {
      
      let xc = constrain(mouseX, leftWall, rightWall);
      let yc = constrain(mouseY, topWall, bottomWall);
      let x = random(-10, 10);
      let y = random(-10, 10);
      if (dist(0, 0, x, y) < 100) {
        ellipseMode(CENTER);
        ellipse(xc + x, yc + y, 1, 1);
      }
    }
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(255, 90);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(230, 103, 165, 75);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '3') { // third tool

    stroke(300, 100, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {

    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == '5') { // this tool calls a function
    stroke(255, 255, 255);
    testbox(20, 20, 200);
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
  image(img, mouseX, mouseY);
  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
  image(img2, mouseX, mouseY);
  }
}
  
function keyTyped() {
  strokeWeight(1);
  if (key === 'v') {
    stroke(23, 48, 130, 80); //violet
  }
  if (key === 'i') {
    stroke(150, 226, 255, 80); //light blue
  }
  if (key === 'p') {
    stroke(255, 131, 182, 80); //pink
  }
  if (key === 'w') {
    stroke(255, 255, 255, 80); //white
  }
  if (key === 'y') {
    stroke(255, 255, 0, 80); //yellow
  }
}
  
function testbox(white) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(255);
  //rect(x-50, y-50, 10, 10);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 's' || key == 'S') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
