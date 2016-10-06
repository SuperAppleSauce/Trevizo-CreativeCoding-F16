//AlexisTrevizo
//cc10.05
//pushpop2
var rotAmount = 0;
var recX = 40;
var recY = 40;
var ellX = 20;
var ellY = 60;

function setup(){

  createCanvas(500,500);
}

function draw(){

  push(); 
      for(i=0; i<10; i++){
        for(j=0;j<1;j++){
          fill(j*220,i*100,200);
          translate(50,50);
          rotAmount = map(mouseX, 0, mouseY, 0, 2*PI);
          rotate(rotAmount);
          rect(i,i,recX,recY);
          }
        }
  pop(); 

 push(); 
      for(i=0; i<10; i++){
        for(j=0;j<1;j++){
          fill(220,i*100,200*j);
          translate(width,height);
          rotAmount = map(mouseX, 0, mouseY, 0, 2*PI);
          rotate(rotAmount);
          rect(i,i,recX,recY);
          }
        }
  pop(); 


   push(); 
      fill(0,0, 255,10);
      translate(width/2,height/2);
      rotAmount = map(mouseX, 0, width, 0, -PI);
      rotate(rotAmount);
      ellipse(0,0,ellX,ellY);
    pop();  
    push(); 
      fill(255,0,0,10);
      translate(width/2,height/2);
      rotAmount = map(mouseX, 0, width, 0, PI);
      rotate(rotAmount);
      ellipse(0,0,ellX,ellY);
    pop();  
}

