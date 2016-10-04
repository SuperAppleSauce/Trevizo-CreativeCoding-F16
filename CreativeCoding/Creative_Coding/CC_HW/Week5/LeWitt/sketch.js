var cir=400;

function setup() {
	createCanvas(500,500);
	background(50);
	println("hola internets");



}

function draw() {
fill(255,255,255,7);
strokeWeight(3);
stroke(255);
ellipse(width/2,height/2,cir,cir);
fill(50)
quad(width*3/8, height*5/8, width*3/8+15, height*3/8, width*5/8-5, height*3/8, width*5/8-25, height*5/8);

 for (var i = 0; i <= height; i +=5) {
 	stroke(50);
    line(i,0, i, height);
  }
for(var j= 0; j<=126;j+=4){
strokeWeight(2);
stroke(255);
line(width*3/8+15-(j/8), j+height*3/8, width*5/8-4-(j/5), j+height*3/8);
  }
}


