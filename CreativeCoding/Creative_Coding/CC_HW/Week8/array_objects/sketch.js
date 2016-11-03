///Alexis Trevizo 11.03.2016

var squareArray = [];


function setup() {
	createCanvas( 510,510);
	for( var i = 0; i < 3; i++){
		squareArray[i] = new Square(random(0,width), random(0,height),random(1,3),3);
	}

}
function draw(){
fill(147,112,219,20);
rect(0,0,width,height);

for(var i = 0; i < squareArray.length; i++){
	squareArray[i].animation();
	squareArray[i].display();

	}

}

function keyPressed(){
	var tacoSquare = new Square( random(0,width),random(0,height),random(1,8),random(1,8));
	squareArray.push(tacoSquare);
}


function Square(xPos,yPos,xVel,yVel){

this.x = xPos;
this.y = yPos;
this.vx = xVel;
this.vy = yVel;

this.animation = function(){
	// animation
	this.x += this.vx;
	if( this.x >width || this.x < 0){
		this.vx = -this.vx;
	}
	this.y += this.vy;
	if(this.y> height || this.y< 0){
		this.vy = -this.vy;
	}
}

this.display = function(){

var c1 = map(xPos,0,width,0,255);
var c2 = map(yPos,0,height,0,255);
		
	fill(c1,(c1+c2)/2*c1,c2);



	rect(this.x,this.y,30,30);
}

};