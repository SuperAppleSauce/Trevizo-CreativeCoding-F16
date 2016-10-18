
var img;
var dia = 10;
var angle =0;
var clearDiat=0;
var clearDiar=0;
var clearDiad=0;
var clearDial=0;
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
elL()
makeCenter();

upClear();
rightClear();2
downClear();
leftClear();

image(img,150,170,img.width/10, img.height/10);




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
	ellipse(width/2,height/2,width/2,height/2);
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





