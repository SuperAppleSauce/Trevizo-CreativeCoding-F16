int sizePlayer = 10;
int xPos = 200;
int yPos = 200;
int grid = 45;
int walls;
int begin;
int duration = 20;
int time = 20;
int score = 0;

void setup() {
 size(500,500);
  begin = millis(); 
}
 

 
void draw() {
  
background(222,205,179);


      noStroke();
    fill(129,66,82);
    for (int xDot =  0; xDot < width; xDot += grid){
    for (int yDot = 0; yDot < height; yDot += grid){
      
    
          if(xDot == xPos && yDot == yPos){
            println("High score!!");
            score=((score*time)+1)+score;
          }
          else if(xPos != xDot && yPos != yDot){
            ellipse(xDot,yDot,time,time);
           
          }      
    }     
    }
   
       
  
    stroke(30);
    fill(70,255,255);
    ellipse(xPos, yPos, sizePlayer, sizePlayer);
    
    
    
     //top left box
 fill(23,94,113);
 beginShape();
 vertex(0,50);
 vertex(50,50);
 vertex(50,0);
 vertex(0,0);
 endShape(CLOSE);
 
 // left L-shape

 beginShape();
 vertex(0,100);
 vertex(75,100);
 vertex(75,300);
 vertex(200,300);
 vertex(200,350);
 vertex(0,350);
 endShape(CLOSE);
 
 
 //bottom left shape

 beginShape();
 vertex(0,500);
 vertex(0,400);
 vertex(50,400);
 vertex(50,450);
 vertex(100,450);
 vertex(100,400);
 vertex(200,400);
 vertex(200,500);
 endShape(CLOSE);
 
 
 //bottom right shape

 beginShape();
 vertex(250,500);
 vertex(250,400);
 vertex(450,400);
 vertex(450,450);
 vertex(500,450);
 vertex(500,500);
 endShape(CLOSE);
 
 //middle shape

 beginShape();
 vertex(125,50);
 vertex(250,50);
 vertex(250,150);
 vertex(200,150);
 vertex(200,250);
 vertex(125,250);
 endShape(CLOSE);
 
 //Right top L-shape
 
  

 beginShape();
 vertex(500,50);
 vertex(300,50);
 vertex(300,200);
 vertex(350,200);
 vertex(350,100);
 vertex(500,100);
 endShape(CLOSE);
 
 //Right Middle shape
 
 
 beginShape();
 vertex(450,150);
 vertex(400,150);
 vertex(400,300);
 vertex(300,300);
 vertex(300,250);
 vertex(250,250);
 vertex(250,350);
 vertex(450,350);
 endShape(CLOSE);
 
    
    //movement
    xPos = xPos + (mouseX - xPos)/15;
    yPos = yPos + (mouseY - yPos)/15;
 
    

    
  color walls = get(xPos,yPos);

  
 if (walls == color(23,94,113)){
   println( "This be a Wall.");
   xPos = 235;
   yPos = 555;
}
    
    if (time > 0){ 
    time = duration - (millis() - begin)/1000;
    textSize(32);
    fill(255,0, 153);
    text(time, 10, 30);
  } 
  
  if (time == 0){
  fill(255,0, 153);
  text ("Game Over!", 175,250);
  text("High Score:", 175,300);
  text(score, 175,350);
    
  }

}