var xPos = 2;
var yPos =100;
var xVel = 5;
var yVel = 5;
var diax =30;
var diay = 30;

var z1 =255;
var z2 = 0;
var z3 = 255;



var ballObject;
var ballObject2; 
var ballObject3; 
var ballObject4; 

function setup() {
createCanvas( 500,500);
// intitial  conditions
ballObject = new Ball(xPos,yPos,xVel,yVel,diax,diay,z1,z2,z3);
ballObject2  = new Ball(100,100,1,2,1,1,100,200,200);
ballObject3  = new Ball(0,400,7,8,60,60,113,200,113);
ballObject4  = new Ball(150,250,20,2,15,15,179,179,200);

}
function draw() {
	ballObject.animate();
	ballObject.display();
	ballObject2.animate();
	ballObject2.display();
	ballObject3.animate();
	ballObject3.display();
	ballObject4.animate();
	ballObject4.display();
}	

function Ball(ballX,ballY,velBallx,velBally,dx,dy,color1,color2,color3){
	this.x = ballX;
	this.y = ballY;
	this.velocityX = velBallx;
	this.velocityY = velBally;
	this.diameterx =dx;
	this.diametery =dy;
	this.c1 = color1;
	this.c2 = color2;
	this.c3 =color3;
	
	this.animate =function(){
		//call antimation / motion logic
		this.x = this.x + this.velocityX;
		this.y = this.y + this.velocityY;
		if( this.x >= width || this.x <= 0){
			this.velocityX = - this.velocityX;
		}
		if( this.y >= height || this.y <= 0){
			this.velocityY = - this.velocityY;
		}

	}

	this.display = function(){
		// call geomtry logic
		fill(this.c1,this.c2,this.c3);
		ellipse(this.x,this.y,this.diameterx,this.diametery);
	}
};