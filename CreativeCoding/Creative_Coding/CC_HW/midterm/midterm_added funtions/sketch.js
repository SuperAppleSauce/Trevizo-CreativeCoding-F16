
var img;
var dia = 10;
var angle =0;
var clearDiat=0;
var clearDiar=0;
var clearDiad=0;
var clearDial=0;
var clearDiax=0;
var clearDiay=0;
var imgeX= 150;
var imgeY= 170;
var clearC=0;
var shiftx=250;
var shifty=250;
var elShift=250;

// var offset = 5;
// var padding = 1;
// var d =2;	

function setup(){
createCanvas(500,500);

background(240,237,237);
img = loadImage("assets/brain1.png");
}



function draw(){

// backPattern();
shiftY();

shiftX();
expandC();
elL();
makeCenter();
upClear();
rightClear();
downClear();
leftClear();
downClearx();
upCleary();

image(img,imgeX,imgeY,img.width/10, img.height/10);




}

function makeCenter(){
	push();
		translate(width/2,height/2);
		rotate(angle);
		
			stroke(250,255,0);
			fill(255, 0, 177,200);	
			makeBall();
		
		for(i=0;i<100;i+=0.001){	
		angle+=i
	}
	pop();
	push();
		translate(width/2,height/2);
		rotate(-angle);
		if(mouseIsPressed){
			stroke(250,255,0);
			fill(100, 50, 179,200);	
			makeBall();
		}	
		angle+=0.1
	pop();

	if(mouseIsPressed){
		angle + .01;
	}
}

function makeBall(){
	ellipse(mouseX/10+width/30,mouseY/10+height/30, dia,dia);

}


function elL(){
	noStroke();
	fill(80, 100, 100,10);
	ellipse(height/2,width/2,250,250);
}

// function backPattern(){

// 	for( var i = 0; i <100; i +=3 ){
//  		for( var j = 0; j <100; j ++){
//  	stroke(200,200,200,10)
//  	fill(30,30,30,0);
//  	ellipse((i*offset)+padding,(j*offset)+padding,d,d);
//  	}
//  	}
 	
// }

function upClear(){
fill(253,253,200);
if(keyIsPressed && keyCode==UP_ARROW){
	clearDiat+=30;
	ellipse(width,height,clearDiat,clearDiat);
	}
	else{
		clearDiat=0;
	}
}

function rightClear(){
	fill(116,219,211);
	if(keyIsPressed && keyCode==RIGHT_ARROW){
	clearDiar+=30;
	ellipse(0,height,clearDiar,clearDiar);
	}
	else{
		clearDiar=0;
   }
	
}


function downClear(){

	fill(198,230,199);
	if(keyIsPressed && keyCode==DOWN_ARROW){
	clearDiad+=30;
	ellipse(0,0,clearDiad,clearDiad);
	}
	else{
		clearDiad=0;
	}
}

function leftClear(){
	fill(254,230,152);
	if(keyIsPressed && keyCode==LEFT_ARROW){
	clearDial+=30;
	ellipse(width,0,clearDial,clearDial);
	}
	else{
		clearDial=0;
	}
}

function downClearx(){

	fill(30,30,30);
	if(keyIsPressed && key=='0'){
	clearDiax+=30;
	ellipse(width/2,0,clearDiax,clearDiax);
	}
	else{
		clearDiax=0;
	}
}
function upCleary(){

	fill(255,255,255);
	if(keyIsPressed && key=='1'){
	clearDiay+=30;
	ellipse(width/2,height,clearDiay,clearDiay);
	}
	else{
		clearDiay=0;
	}
}

function expandC(){
	fill(80, 100, 100,10);
	if(keyIsPressed && keyCode==RETURN){
	clearC+=20;
	ellipse(width/2,height/2,clearC,clearC);
	}
	else{
		clearC=0;
   }

}
function shiftX(){
	push();
	
	fill(80, 100, 100,10);
	if((keyIsPressed && key=='q')||(keyIsPressed && key=='t')||(keyIsPressed && key=='o')){
	shiftx+=10;
	ellipse(shiftx,shifty,elShift,elShift);
	}
	else{
		shiftx=250;
   }
}
function shiftY(){
	fill(80, 100, 100,10);
	if((keyIsPressed && key=='w')||(keyIsPressed && key=='y')||(keyIsPressed && key=='p')){
	shifty+=10;
	ellipse(shiftx,shifty,elShift,elShift);
	}
	else{
		shifty=250;
   }
}




