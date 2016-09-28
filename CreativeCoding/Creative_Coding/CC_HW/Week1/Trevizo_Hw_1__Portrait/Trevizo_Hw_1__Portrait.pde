void setup(){
  


size(600,800);

fill(0,0,0);
rect(0,0,600,800);

//faceshape
fill(255,189,165);

beginShape();

  //eyed socket dip fleft
  vertex(60,340);
  vertex(40,280);
  vertex(80,80);
  vertex(140,0);
  vertex(360,0);
  vertex(440,80);
  vertex(480,240);
  //eye socket right
  vertex(500,300);
  vertex(520,400);
  vertex(512,480);
  vertex(496,560);
  vertex(472,620);
  vertex(400,700);
  //chincleff?
  vertex(260,720);
  vertex(140,620);
  vertex(80,520);
  vertex(60,400);
  
  endShape(CLOSE);
   //cheek
fill(255,224,193);
stroke(255,192,127);

beginShape();
curveVertex(320,  280);
curveVertex(390,  245);
curveVertex(480,  280);
curveVertex(490,  320);
curveVertex(490,  480);
vertex(505,430);
vertex(490,550);
vertex(375,455);
vertex(355,360);
vertex(300,260);
endShape(CLOSE);


  
  //nose
fill(191,127,127);  
beginShape();
vertex(340,  320);
vertex(300,  190);
vertex(320,  180);
vertex(480,  220);
vertex(300,  150);
vertex(260,  140);
vertex(280,  220);
vertex(340,  340);
endShape(CLOSE);

  //rightbrow
 fill(2,52,103);
 beginShape();
 vertex(300, 140);
 vertex(300, 110);
 vertex(340, 90);
 vertex(360, 85);
 vertex(400, 100);
 vertex(420, 110);
 vertex(440, 120);
 vertex(460, 140);
 vertex(460, 180);
 vertex(440, 160);
 vertex(420, 150);
 vertex(400, 140);
 vertex(380, 130);
 vertex(360, 140);
 vertex(340, 155);
 vertex(320, 150);
 vertex(300, 140);
 endShape();
 
 //leftbrow
 fill(2,52,103);
 beginShape();
 vertex(50,160);
 vertex(60,140);
 vertex(80,135);
 vertex(100,130);
 vertex(120,125);
 vertex(140,130);
 vertex(155,140);
 vertex(165,165);
 vertex(155,180);
 vertex(140,190);
 vertex(120,190);
 vertex(100,185);
 vertex(80,195);
 vertex(60,197);
 vertex(50,200);
 
endShape(); 


 //more nose
 fill(191,127,127); 
 beginShape();
 vertex(200,360);
 vertex(210,353);
 vertex(240,358);
 vertex(260,354);
 vertex(280,357);
 vertex(300,345);
 vertex(320,353);
 vertex(350,360);
 vertex(355,365);
 vertex(365,400);
 vertex(360,415);
 vertex(360,420);
 vertex(358,430);
 vertex(345,420);
 vertex(353,415);
 vertex(345,410);
 vertex(330,405);
 vertex(320,400);
 vertex(300,405);
 vertex(275,414);
 vertex(255,410);
 vertex(240,415);
 vertex(220,430);
 vertex(210,435);
 vertex(200,433);
 vertex(195,428);
 vertex(190,420);
 vertex(186,415);
 vertex(184,400);
 vertex(187,380);
 
 
 endShape(CLOSE);
 
  //lips
 fill(206,117,135);
 stroke(170,79,88);
  beginShape();
  
 //left corner start--counter clockwise
  vertex(180,568);
  vertex(272,540);
  vertex(420,530);
  vertex(440,525);
  vertex(400,500);
  vertex(360,500);
  vertex(320,490);
  vertex(280,510);
  vertex(240,500);
  vertex(200,528);
  vertex(180,560);
  endShape(CLOSE);
  
    beginShape();
  
 //IDK, but is a cool accident.
  fill(156,67,71);
  vertex(180,568);
  vertex(272,540);
  vertex(420,530);
  vertex(440,525);

  endShape(CLOSE);
  
//noseholes
fill(63,0,0);
beginShape();
vertex(248,384);
vertex(240,400);
vertex(208,408);
vertex(202,397);
vertex(208,384);
endShape(CLOSE);

beginShape();
vertex(280,369);
vertex(320,360);
vertex(340,370);
vertex(342,386);
vertex(300,389);
endShape(CLOSE);

  
//left eye + right eye

beginShape(); 
 stroke(255,170,170);
 fill(227,224,223);
 vertex(100,280);
 bezierVertex(70,220,160,180,180,256);
 bezierVertex(160,235,100,265,100,280);
 endShape();
 
 beginShape(); 

 vertex(328,232);
 bezierVertex(320,180,408,150,420,220);
 bezierVertex(420,235,385,200,328,232);
 endShape();
 
 //pupils(l,r)
fill(30,30,30);
stroke(127,63,63);
strokeWeight(10);
ellipse(128,235,31,29);
ellipse(370,200,29,27);
//eyestuff
fill(255);
stroke(30,30,30);
strokeWeight(1);
ellipse(138,229,10,8);
ellipse(117,232,7,6);
ellipse(377,198,10,8);
ellipse(360,200,7,6);
}

void draw(){
  println("why are my brows this color?");
}