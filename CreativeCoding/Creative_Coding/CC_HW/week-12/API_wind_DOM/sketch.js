// Alexis Trevizo 
// Wind chart
// 12.01.16
//Playing with the DOM

var input;
var inputButton;
var myInputValue;

var norCo =110;
var url =[];
var myData1;
var myData2;
var myData3;
var myData4;
var myData5;

var city = [];
var APIkey;
var baseUrl;
var xPos1 = 1; 
var xPos2 = 1; 
var xPos3 = 1;
var xPos4 = 1;
var xPos5 = 1;
var xPos6 = 1;
var yPos1 = 100;
var yPos2 = 200;
var yPos3 = 300;
var yPos4 = 400;
var yPos6 = 500;
var yPos5 = 600;
var xVel1 = 10;
var xVel2 = 10;
var xVel3 = 10;
var xVel4 = 10;
var xVel5 = 10;
var xVel6 = 10;

function setup(){	

	createCanvas(500,800);

	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	city[0] = "SaltLakeCity,UT";
	city[1] = "NewOrleans,LA";
	city[2] = "LosAngles,CA";
	city[3] = "NewYork,NY";
	// city[4] = myInputValue;
	

	APIkey = "7eeb68a4d372e2daf5798a6031fb9dbe";
	url[0] = baseUrl + "q=" + city[0] + "&appid=" + APIkey;
	url[1] = baseUrl + "q=" + city[1] + "&appid=" + APIkey;
	url[2] = baseUrl + "q=" + city[2] + "&appid=" + APIkey;
	url[3] = baseUrl + "q=" + city[3] + "&appid=" + APIkey;
	url[4] = baseUrl + "q=" + myInputValue + "&appid=" + APIkey;




input = createInput("");
	input.position(350,(yPos6+40));
	inputButton = createButton("Submit");
	inputButton.position(430,(yPos6+41));
	inputButton.mousePressed(readValue);
	myInputValue = "";

	
}



function gotData1(myData1){
	
	xVel1= (myData1.wind.speed/110)*norCo;
	console.log(myData1.wind.speed);
}
function gotData2(myData2){
	
	xVel2= (myData2.wind.speed/110)*norCo;
	// console.log(myData2.wind.speed);
}
function gotData3(myData3){
	
	xVel3= (myData3.wind.speed/110)*norCo;
	// console.log(myData3.wind.speed);
}
function gotData4(myData4){
	
	xVel4= (myData4.wind.speed/110)*norCo;
	// console.log(myData4.wind.speed);
}


function draw(){
	noStroke();
	fill(30,30,30,50);
	rect(0,0,width,height);

	//wind
	fill(255,255,255);
	rect(xPos1,yPos1,5,2);
	rect(xPos2,yPos2,5,2);
	rect(xPos3,yPos3,5,2);
	rect(xPos4,yPos4,5,2);
	rect(xPos5,yPos5,5,2);
	rect(xPos6,yPos6,5,2);

	//text
	textSize(26);
	textAlign(RIGHT);
	text("wind(mph)",475,50);
	textSize(8);
	text(city[0],475,(yPos1+30));
	text(city[1],475,(yPos2+30));
	text(city[2],475,(yPos3+30));
	text(city[3],475,(yPos4+30));
	text(myInputValue, 475,(yPos6+30));
	text("Hurricane Otto",475,(yPos5+30));

	//animation

	 xPos1+=xVel1;
	if(xPos1>=width-3){
		xPos1 = 0;
	}

	 xPos2+=xVel2;
	if(xPos2>=width-3){
		xPos2= 0;
	}

	 xPos3+=xVel3;
	if(xPos3>=width-3){
		xPos3 = 0;
	}

	 xPos4+=xVel4;
	if(xPos4>=width-3){
		xPos4 = 0;
	}
	 xPos5+=xVel5;
	if(xPos5>=width-3){
		xPos5 = 0;
	}
	 xPos6+=xVel6;
	if(xPos6>=width-3){
		xPos6 = 0;
	}
}


function readValue(){

	myInputValue = input.value();
	console.log(myInputValue);
}


function mouseClicked(){
	
	myData1 = loadJSON(url[0], gotData1);
	myData2 = loadJSON(url[1], gotData2);
	myData3 = loadJSON(url[2], gotData3);
	myData4 = loadJSON(url[3], gotData4);
	myData5 = loadJSON(url[4], gotData5);
	xVel5= (110/110)*norCo;

	}
