var d = 20;
var offset = 70;
var padding = 40;

function setup() {
	createCanvas(800,800);
	
}

function draw() {
 	for( var i = 0; i <10; i +=3 ){
 		for( var j = 0; j <10; j ++){
 	fill(50*i,10*i,1.01*j ,1.2*j);
 	ellipse((i*offset)+padding,(j*offset)+padding,d,d);
 	ellipse(offset*i,offset*i,j*offset,j*offset)
 			}
 		}
}
