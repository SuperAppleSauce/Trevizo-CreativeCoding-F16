
var ex1 = 10;
var ex2 =6;
var ex3 = 30;


var grid1;
var grid2; 


function setup() {
createCanvas( 500,500);
// intitial  conditions
grid1 = new Grid(ex1,ex3);
grid2 = new Grid(100,20,5);


}
function draw() {
	grid1.animate();
	grid1.display();
	grid2.animate();
	grid2.display();
}	

function Grid(gridX,gridY,scaleS){
	this.x = gridX;
	this.s = scaleS;
	this.y = gridY;


	
	this.animate =function(){
	push();
	scale(mouseX/this.s,mouseY/this.s);
	pop();
	}

	this.display = function(){
		// call geomtry logic
		 for (this.x = 0; this.x <= 20; this.x +=5) {
 			
   		 	line(this.x,this.x, 100, 800);
  		}
  		 for (this.y = 0; this.y <= 40; this.y +=5) {
 			
   		 	line(this.y,this.y, 200, 900);
  		}
	  	}
		
};