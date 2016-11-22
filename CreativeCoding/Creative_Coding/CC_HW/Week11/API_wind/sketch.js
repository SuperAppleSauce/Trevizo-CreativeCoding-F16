// Alexis Trevizo 
// Wind chart
// 11.22.16



var myData;
var url;
var city;
var APIkey;
var baseUrl;
var globalData
var xPos = 1; 
var yPos = 100;
var xVel=8;  //myData.wind.speed

function setup(){	

	createCanvas(500,500);
	baseUrl = "http://api.openweathermap.org/data/2.5/weather?";
	city = "SaltLakeCity,ut";
	APIkey = "7eeb68a4d372e2daf5798a6031fb9dbe";
	url = baseUrl + "q=" + city + "&appid=" + APIkey;
	myData = loadJSON(url, gotData);
}

function gotData(myData){
	console.log(myData.wind.speed);
}

function draw(){
	noStroke();
	fill(30,30,30,50);
	rect(0,0,500,500);
	fill(255,255,255);
	rect(xPos,yPos,5,2);
	rect(xPos,50,5,2);
	rect(xPos,400,5,2);
	rect(xPos,10,5,2);

	xPos+=xVel;

	if(xPos>=width-3){
		xPos = 0;
		myData = loadJSON(url, gotData);
	}

}