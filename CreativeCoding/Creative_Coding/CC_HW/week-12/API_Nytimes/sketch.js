//Alexis Trevizo + Julian Frank
//11.22.2016

var baseURL, apiKey, url, searchTerm, globalData;
var iterator;
var myTerms = [];
var xPos = -200;
var xVel = 0.05;

function setup(){
	noStroke();
	iterator = 0;
	createCanvas(600,600);
	myTerms[0] = "tacos";
	myTerms[1] = "cake";
	myTerms[2] = "mushroom";
	myTerms[3] = "GaGa";
	baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "01b919a225a84165bed2acb3610cbe0b";

	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[0];
	
	loadJSON(url, dataReceived);


}

function draw(){
	background(100,63,175,142);
	fill(255);
	textSize(18);
	text("Relatively Hungry Turtle News", width/4, 50);
	
	if(globalData){ //test if data is available
		
		xPos+=xVel;
		text(globalData.response.docs[0].headline.main, xPos, height/2);	
	}
	else { //still loading!
		println("there's no data yet!");
	}	

	

}
function loadNewData(){
	loadJSON(url, dataReceived);
}

function dataReceived(incomingData){
	globalData = incomingData;
}

function mouseClicked(){
	if(globalData){
	iterator++;

}
	else{
		println("please wait...loading next article");
	}

	if(iterator > myTerms.length){
		iterator = 0;	
	}
	println(iterator);
	console.log(globalData.response.docs[iterator].snippet);
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[iterator-2];
	loadNewData();
}

