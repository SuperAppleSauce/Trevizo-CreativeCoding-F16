var on = false;
var on2 = false;
var on3 = false;
var on4 = false;
var on5 = false;
var bulbX = 1.5*1280/12;
var bulbX2 = 3.75*1280/12;
var bulbX3 = 6*1280/12;
var bulbX4 = 8.25*1280/12;
var bulbX5 = 10.5*1280/12;
var bulbY = 524;
var bulbZ = 14;
var d; 
var d2;
var d3;
var d4;
var d5;
var img1;
var Lamp1 = 0; 
var Lamp3 = 0; 
var Lamp2 = 0; 
var Lamp4 = 0; 
var Lamp5 = 0; 
var slider;
var sliderA;
var slider2;
var sliderB;
var slider3;
var sliderC;
var slider4;
var sliderD;
var slider5;
var sliderE;
var volume;
var speed;
var volume2;
var speed2;
var volume3;
var speed3;
var volume4;
var speed4;
var volume5;
var speed5;
var k1Sound;
var url =[];
var city = [];
var APIkey;
var baseUrl;
var myData1;
var myData2;
var myData3;
var myData4;
var myData5;
var xPos1 = 1.5*1280/12;
var xPos2 = 3.75*1280/12;
var xPos3 = 6*1280/12;
var xPos4 = 8.25*1280/12;
var xPos5 = 10.5*1280/12; 
var yPos1 = 100;
var yPos2 = 100;
var yPos3 = 100;
var yPos4 = 100;
var yPos5 = 100;
var yVel1 = 10;
var yVel2 = 10;
var yVel3 = 10;
var yVel4 = 10;
var yVel5 = 10;
var danceX = 0;
var danceY = 0;
var danceX2 = 0;
var danceY2 = 0;
var danceX3 = 0;
var danceY3 = 0;
var danceX4 = 0;
var danceY4 = 0;
var danceX5 = 0;
var danceY5 = 0;
function preload(){ 
  k1Sound = loadSound('assets/cricket.wav');
  k1Sound2 = loadSound('assets/cricket.wav');
  k1Sound3 = loadSound('assets/cricket.wav');
  k1Sound4 = loadSound('assets/cricket.wav');
  k1Sound5 = loadSound('assets/cricket.wav');
  img1 = loadImage("assets/cricket.png");
}
function setup(){
	createCanvas(1280, 720);
	console.log("setup");
	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	city[0] = "NewYork,NY";
	city[1] = "Honolulu,HI";
	city[2] = "Washington,DC";
	city[3] = "Atlanta,GA";
	city[4] = "Boulder,CO";
	APIkey = "d5ad2d282e770056ba1edc23c1b19030";
	url[0] = baseUrl + "q=" + city[0] + "&units=Imperial" + "&appid=" + APIkey;
	url[1] = baseUrl + "q=" + city[1] + "&units=Imperial" + "&appid=" + APIkey;
	url[2] = baseUrl + "q=" + city[2] + "&units=Imperial" + "&appid=" + APIkey;
	url[3] = baseUrl + "q=" + city[3] + "&units=Imperial" + "&appid=" + APIkey;
	url[4] = baseUrl + "q=" + city[4] + "&units=Imperial" + "&appid=" + APIkey;
	myData1 = loadJSON(url[0], gotData1);
	myData2 = loadJSON(url[1], gotData2);
	myData3 = loadJSON(url[2], gotData3);
	myData4 = loadJSON(url[3], gotData4);
	myData5 = loadJSON(url[4], gotData5);
	k1Sound.playMode("sustain");

	slider = createSlider(100, 1400, 600);
	slider.position(xPos1-70,680);
	sliderA = createSlider(0.0, 1500,600);
	sliderA.position(xPos1-70,700);

	slider2 = createSlider(100, 1400, 600);
	slider2.position(xPos2-70,680);
	sliderB = createSlider(0.0, 1500,600);
	sliderB.position(xPos2-70,700);

	slider3 = createSlider(100, 1400, 600);
	slider3.position(xPos3-70,680);
	sliderC = createSlider(0.0, 1500,600);
	sliderC.position(xPos3-70,700);

	slider4 = createSlider(100, 1400, 600);
	slider4.position(xPos4-70,680);
	sliderD = createSlider(0.0, 1500,600);
	sliderD.position(xPos4-70,700);

	slider5 = createSlider(100, 1400, 600);
	slider5.position(xPos5-70,680);
	sliderE = createSlider(0.0, 1500,600);
	sliderE.position(xPos5-70,700);
}
function draw(){
//slider maps
	var mySliderValue = slider.value();
	speed = map(mySliderValue, 0.1, width, 0, 2);
  	k1Sound.rate(speed);
	var A = sliderA.value();
	volume = map(A, 0.1, width, 0, 2);
  	k1Sound.amp(volume);

  	var mySliderValue2 = slider2.value();
	speed2 = map(mySliderValue2, 0.1, width, 0, 2);
  	k1Sound2.rate(speed2);
	var B = sliderB.value();
	volume2 = map(B, 0.1, width, 0, 2);
  	k1Sound2.amp(volume2);

  	var mySliderValue3 = slider3.value();
	speed3 = map(mySliderValue3, 0.1, width, 0, 2);
  	k1Sound3.rate(speed3);
	var C = sliderC.value();
	volume3 = map(C, 0.1, width, 0, 2);
  	k1Sound3.amp(volume3);

  	var mySliderValue4 = slider4.value();
	speed4 = map(mySliderValue4, 0.1, width, 0, 2);
  	k1Sound4.rate(speed4);
	var D = sliderD.value();
	volume4 = map(D, 0.1, width, 0, 2);
  	k1Sound4.amp(volume4);

  	var mySliderValue5 = slider5.value();
	speed5 = map(mySliderValue5, 0.1, width, 0, 2);
  	k1Sound5.rate(speed5);
	var E = sliderE.value();
	volume5 = map(E, 0.1, width, 0, 2);
  	k1Sound5.amp(volume5);
	noStroke();
	fill(3,7,38,100);
	rect(0,0,width,height);
//temp
	fill(255,255,255);
	rect(xPos1,yPos1,5,10);
	rect(xPos2,yPos2,5,10);
	rect(xPos3,yPos3,5,10);
	rect(xPos4,yPos4,5,10);
	rect(xPos5,yPos5,5,10);
//animation
	 yPos1+=yVel1;
	if(yPos1>=500){
		yPos1 = 0;
		k1Sound.play();
		danceX = random(-10,10);
		danceY = random(-10,10);
	}
		 yPos2+=yVel2;
	if(yPos2>=500){
		yPos2 = 0;
		k1Sound2.play();
		danceX2 = random(-10,10);
		danceY2 = random(-10,10);
	}
		 yPos3+=yVel3;
	if(yPos3>=500){
		yPos3 = 0;
		k1Sound3.play();
		danceX3 = random(-10,10);
		danceY3 = random(-10,10);
	}
		 yPos4+=yVel4;
	if(yPos4>=500){
		yPos4 = 0;
		k1Sound4.play();
		danceX4 = random(-10,10);
		danceY4 = random(-10,10);
	}
		 yPos5+=yVel5;
	if(yPos5>=500){
		yPos5 = 0;
		k1Sound5.play();
		danceX5 = random(-10,10);
		danceY5 = random(-10,10);
	}
//cricket zone
	fill(232,168,57);
	rect(0,500,width,300);
//solo/spotlight 
//lamp
		fill(100,100,100);
		stroke(30);
		beginShape();
			vertex(1*width/12+45, 500);
			vertex(2*width/12-45, 500);
			vertex(2*width/12-35, 520);
			vertex(1*width/12+35, 520);
		endShape(CLOSE);
		beginShape();
			vertex(3.25*width/12+45, 500);
			vertex(4.25*width/12-45, 500);
			vertex(4.25*width/12-35, 520);
			vertex(3.25*width/12+35, 520);
		endShape(CLOSE);
		beginShape();
			vertex(5.5*width/12+45, 500);
			vertex(6.5*width/12-45, 500);
			vertex(6.5*width/12-35, 520);
			vertex(5.5*width/12+35, 520);
		endShape(CLOSE);
		beginShape();
			vertex(7.75*width/12+45, 500);
			vertex(8.75*width/12-45, 500);
			vertex(8.75*width/12-35, 520);
			vertex(7.75*width/12+35, 520);
		endShape(CLOSE);
		beginShape();
			vertex(10*width/12+45, 500);
			vertex(11*width/12-45, 500);
			vertex(11*width/12-35, 520);
			vertex(10*width/12+35, 520);
		endShape(CLOSE);
		fill(16);
		ellipse(xPos1,519,34,11);
		ellipse(xPos2,519,34,11);
		ellipse(xPos3,519,34,11);
		ellipse(xPos4,519,34,11);
		ellipse(xPos5,519,34,11);
//bulb
	fill(230);
	ellipse(bulbX,bulbY,bulbZ,bulbZ+1);
	ellipse(bulbX2,bulbY ,bulbZ,bulbZ+1);
	ellipse(bulbX3,bulbY ,bulbZ,bulbZ+1);
	ellipse(bulbX4,bulbY ,bulbZ,bulbZ+1);
	ellipse(bulbX5,bulbY ,bulbZ,bulbZ+1);
//light
		fill(220,220,220,Lamp1);
		noStroke();	
		beginShape();
			vertex(xPos1-5, 518);
			vertex(xPos1+5, 518);
			vertex(xPos1+110, 650);
			vertex(xPos1-110, 650);
		endShape(CLOSE);
		fill(220,220,220,Lamp2);
		beginShape();
			vertex(xPos2-5, 518);
			vertex(xPos2+5, 518);
			vertex(xPos2+110, 650);
			vertex(xPos2-110, 650);
		endShape(CLOSE)
		fill(220,220,220,Lamp3);
		beginShape();
			vertex(xPos3-5, 518);
			vertex(xPos3+5, 518);
			vertex(xPos3+110, 650);
			vertex(xPos3-110, 650);
		endShape(CLOSE)
		fill(220,220,220,Lamp4);
		beginShape();
			vertex(xPos4-5, 518);
			vertex(xPos4+5, 518);
			vertex(xPos4+110, 650);
			vertex(xPos4-110, 650);
		endShape(CLOSE)
		fill(220,220,220,Lamp5);
		beginShape();
			vertex(xPos5-5, 518);
			vertex(xPos5+5, 518);
			vertex(xPos5+110, 650);
			vertex(xPos5-110, 650);
		endShape(CLOSE)
		fill(255,255,255,Lamp1);
		ellipse(xPos1,650,217,30);
		fill(255,255,255,Lamp2);
		ellipse(xPos2,650,217,30);
		fill(255,255,255,Lamp3);
		ellipse(xPos3,650,217,30);
		fill(255,255,255,Lamp4);
		ellipse(xPos4,650,217,30);
		fill(255,255,255,Lamp5);
		ellipse(xPos5,650,217,30);
	
//cricket
		imageMode(CENTER);
		image(img1,xPos1+danceX,610+danceY,110, 110);
		image(img1,xPos2+danceX2,610+danceY2,110, 110);
		image(img1,xPos3+danceX3,610+danceY3,110, 110);
		image(img1,xPos4+danceX4,610+danceY4,110, 110);
		image(img1,xPos5+danceX5,610+danceY5,110, 110);

if(on){
 	Lamp1 = 150;
 			//text
	fill(255,255,255,Lamp1);
  	textSize(32);
  	text(city[0],xPos1-70,width/3);
  	text((myData1.main.temp)+"°F",xPos1-70,width/3+40);

}
 else{
 	Lamp1 = 0;
 	yVel1 =0;
 }
if(on2){
 	Lamp2 = 150;
 	fill(255,255,255,Lamp2);
  	textSize(32);
  	text(city[1],xPos2-70,width/3);
  	text((myData2.main.temp)+"°F",xPos2-70,width/3+40);
}
 else{
 	Lamp2 = 0;
 	yVel2 =0;
 }
 if(on3){
 	Lamp3 = 150;
 	fill(255,255,255,Lamp3);
  	textSize(32);
  	text(city[2],xPos3-70,width/3);
  	text((myData3.main.temp)+"°F",xPos3-70,width/3+40);
}
 else{
 	Lamp3 = 0;
 	yVel3 =0;
 }
if(on4){
 	Lamp4 = 150;
 	fill(255,255,255,Lamp4);
  	textSize(32);
  	text(city[3],xPos4-70,width/3);
  	text((myData4.main.temp)+"°F",xPos4-70,width/3+40);
}
 else{
 	Lamp4 = 0;
 	yVel4 =0;
 }
 if(on5){
 	Lamp5 = 150;
 	fill(255,255,255,Lamp5);
  	textSize(32);
  	text(city[4],xPos5-70,width/3);
  	text((myData5.main.temp)+"°F",xPos5-70,width/3+40);
}
 else{
 	Lamp5 = 0;
 	yVel5 =0;
 }



}
function mousePressed() {
  d = dist(bulbX, bulbY, mouseX, mouseY);
  if (d<bulbZ/2) {
  	loadJSON(url[0], gotData1);
    on = !on;

	}
   d2 = dist(bulbX2, bulbY, mouseX, mouseY);
  if (d2<bulbZ/2) {
  	 	loadJSON(url[1], gotData2);
    on2 = !on2;
	}
   d3 = dist(bulbX3, bulbY, mouseX, mouseY);
  if (d3<bulbZ/2) {
  		loadJSON(url[2], gotData3);
    on3 = !on3;
	}
   d4 = dist(bulbX4, bulbY, mouseX, mouseY);
  if (d4<bulbZ/2) {
  	loadJSON(url[3], gotData4);
    on4 = !on4;
	}
   d5 = dist(bulbX5, bulbY, mouseX, mouseY);
  if (d5<bulbZ/2) {
  	loadJSON(url[4], gotData5); 
    on5 = !on5;
	}	
}
function gotData1(myData1){
	console.log("gotData1");
	yVel1 = abs((4*(myData1.main.temp)-160)/6);
	console.log(myData1.main.temp);
	console.log((4*(myData1.main.temp)-160)/30);
}

function gotData2(myData2){
	console.log("gotData2");
	yVel2 = abs((4*(myData2.main.temp)-160)/6);
	console.log(myData2.main.temp);
	console.log((4*(myData2.main.temp)-160)/30);
}
function gotData3(myData3){
	console.log("gotData3");
	yVel3 = abs((4*(myData3.main.temp)-160)/6);
	console.log(myData3.main.temp);
	console.log((4*(myData3.main.temp)-160)/30);
}
function gotData4(myData4){
	console.log("gotData4");
	yVel4 = abs((4*(myData4.main.temp)-160)/6);
	console.log(myData4.main.temp);
	console.log((4*(myData4.main.temp)-160)/30);
}
function gotData5(myData5){
	console.log("gotData5");
	yVel5 = abs((4*(myData5.main.temp)-160)/6);
	console.log(myData5.main.temp);
	console.log((4*(myData5.main.temp)-160)/30);
}