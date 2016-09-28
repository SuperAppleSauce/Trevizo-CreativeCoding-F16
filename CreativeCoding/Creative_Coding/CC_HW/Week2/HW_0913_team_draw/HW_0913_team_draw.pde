void setup(){
  size(600,500);
}

void draw(){
   stroke(255,255,255);
  line(500,0,500,500);
  
  noStroke();
  // if mousePressed AND mouseX < width/2
  
  if((mouseX < width/2) && (mouseY < height/3)){
    fill(255,255,0);
    rect(0,0,300,height/3);
    
  }
  else{
    fill(0,0,0);
    rect(0,0,width/2,height/3);
  }
  
    if((mouseX < width/2) && (mouseY > height/3)){
    fill(255,0,0);
    rect(0,height/3,300,height*2/3);
    
  }
  else{
    fill(0,0,0);
    rect(0,height/3,width/2,height*2/3);
  }
  
  if(mouseX == width*5/6){
    fill(255,255,255);
    rect(width/2,0,width/2,height);
  } 
  else{
    fill(0,0,0);
    rect(width/2,0,width/2,height);
    stroke(255,255,255);
  line(500,0,500,500);
  }
  

}
  

void mouseMoved(){
  if(mouseX>=width/2){
   fill(255);
   ellipse(mouseX,mouseY,30,30);
  }
  
  else if(mouseY <= (height*1/3) && mouseX <= width/2){
    fill(255,0,255);
   rect(mouseX,mouseY,40,40);  
  }
  else{
     fill(0,255,255);
    rect(mouseX,mouseY,20,20);
   }
    
    //if( mouseY is not above height/2 and in below widthx){
    
      
}