
var k1Sound;
var k2Sound;
var j1Sound;
var circleSize; 
var xPos; 
var yPos; 

var xVel; 
var yVel;

var xDirection; //moving forward or backward?
var yDirection;

function preload(){
  
  k1Sound = loadSound('assets/kanye1.wav');
  k2Sound = loadSound('assets/kanye2.wav');
  j1Sound = loadSound('assets/justin.wav');
}
function setup(){
  createCanvas(400,400);
  circleSize = 30;
  xPos = 1; 
  yPos = 1;
  xVel = 5;
  yVel= 3;
  xDirection = 1; //positive 1, moves to the right
  yDirection = 1;
  k1Sound.playMode("sustain");
  k2Sound.playMode("sustain");
  j1Sound.loop();
  j1Sound.play();
}
function draw(){

  ball();

}

  function ball(){
  fill(130,130,130);
  ellipse(xPos, yPos, circleSize, circleSize);
  
  xPos = xPos + xVel;
  yPos = yPos + yVel;
  
  if (xPos >= width || xPos <= 0){
    xDirection = -xDirection; //direction is -1, moving to left
    xVel = xVel * xDirection; // makes xVelocity negative
    k1Sound.play()
  }
  
  if(yPos >= height || yPos <= 0){
    yDirection = -yDirection;
    yVel = yVel * yDirection;
    k2Sound.play()
  }

}