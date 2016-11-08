///Alexis Trevizo 11.08.2016

var aud1;
var aud2;
var aud3;


var myArray = [];
var ballObject;
var ballObject1;

// function preload(){
// 	aud1 = loadSound('assests/spike.wav');
// 	aud2 = loadSound('assests/hum.wav');
// 	aud3 = loadSound('assests/heart.mp3');
// }

function setup() {
	createCanvas( 400,400);
	for( var i = 0; i < 1; i++){
		myArray[i] = new Thing(0, height/2,100);//,aud3);
	}

ballObject = new Gong(width,0,0.1,0);//,aud1);
ballObject1  = new Gong(width,height,0,0.25);//,aud2);


	// aud1.playMode("sustain");
	// aud2.playMode("sustain");
	// aud3.playMode("sustain");


}

function draw (){
background(27, 0, 70);

for( var i = 0; i < myArray.length;i++){
	myArray[i].animation();
	myArray[i].display();
	}
// ballObject.audio2();
ballObject.animation2();
ballObject.display2();
ballObject1.animation2();
ballObject1.display2();
}

function keyPressed(){
	var applesauce = new Thing(0,height/2, random(10,200));

	myArray.push(applesauce);
}

function Thing(xPos, yPos, distance){//,sound3){
//this.s3 = sound3;
this.d = distance;
this.x = xPos;
this.y = yPos;
var j = 0.0;
var v = random(0.5,2.5);
var r = random(1,10);



this.animation = function(){
	j=j+v;
	if ( j>360){
		i=0;
	}

		// if(this.x = 0){
		// this.s3.play();
		// }
}
this.display = function(){

var x =this.x+distance*sin(radians(j)); 
var y = this.y+distance*cos(radians(j));
noFill();
strokeWeight(random(1,2));
stroke(0,200,80);

ellipse(x,y,r,r);
}

};


function Gong(_x,_y,_vx,_vy){//sound1,sound2){
//this.s1 = sound1;
//this.s2 = sound2;
this.x2 = _x;
this.y2 = _y;
this.xvel = _vx;
this.yvel = _vy;

this.animation2 = function(){

	this.x2 += this.xvel;
	if( this.x2 >width || this.x2 < 0){
		this.xvel = -this.xvel;
		// this.s2.play();
	}
	this.y2 += this.yvel;
	if( this.y2 >height || this.y2 < 0){
		this.yvel = -this.yvel;
		// this.s1.play();
	}
}
this.display2 = function(){
	noFill();
	strokeWeight(random(1,2));
	stroke(200,200,0);
	ellipse(this.x2,this.y2,30,30);
}

};

