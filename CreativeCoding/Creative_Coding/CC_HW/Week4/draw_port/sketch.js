/// this is a port of the first team drawing tool created in creative coding at NYU. 
///Alexis Trevizo with colab with Yuening Bai

function setup(){
  createCanvas(600,500);
  stroke(20);
  background(200);

}


      
function draw(){
  stroke(255);
  line(500,0,500,500);
  
  noStroke();
  // if mousePressed AND mouseX < width/2
  
    if((mouseX < width/2) && (mouseY < height/3)){
      fill(255,255,0);
      rect(0,0,300,height/3);
      println("yellow box works");
    
      }



    else{
      fill(0,0,0);
      rect(0,0,width/2,height/3);
      println("else1works");
    }

      if((mouseX < width/2) && (mouseY > height/3)){
        fill(255,0,0);
        rect(0,height/3,300,height*2/3); 
        println("if2works"); 
    }
      else{
        fill(0,0,0);
        rect(0,height/3,width/2,height*2/3);
        println("else2works");

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


function mouseMoved(){
  if(mouseX>=width/2){
    fill(255);
    ellipse(mouseX,mouseY,30,30);
      return false;
  }
  
  else if(mouseY <= (height*1/3) && mouseX <= width/2){
    fill(255,0,255);
    rect(mouseX,mouseY,40,40);  
      return false;
  }
  else{
     fill(0,255,255);
      rect(mouseX,mouseY,20,20);
      return false;
   }
 }


}


