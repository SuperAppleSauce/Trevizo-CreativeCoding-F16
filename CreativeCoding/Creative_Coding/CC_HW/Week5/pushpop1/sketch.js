//AlexisTrevizo
//cc10.05
//pushpop1

var radius =20;
function setup() {
  createCanvas(500,400);
  }

function draw() {
background(253,253,150);

  push();
  		fill(255,255,200);
  		noStroke();
  		translate(width/2,height/2);
    	scale(mouseX/50,mouseY/50);
    	for(i=0;i<50; i++){
        ellipse(i,i*2,radius,radius);
        ellipse(i,-i*2,radius,radius);
        ellipse(-i,i*2,radius,radius);
        ellipse(-i,-i*2,radius,radius);
    	}
  pop();
  push();
  		fill(255,0,0,70);
  		translate(width/2,height/2); 
  		rotX = map(mouseX, 0, width, 0, PI);
    	rotate(rotX);
        ellipse(0,0,radius,radius);
        ellipse(radius,radius,radius,radius);
         ellipse(2.5*radius,2.5*radius,radius,radius); 
        rotY = map(mouseY, 0, height, 0, 2*PI);
    	rotate(-rotY);
        ellipse(2*radius,2*radius,radius,radius); 
       	 ellipse(4*radius,4*radius,radius,radius); 
   pop(); 
 
   
}
