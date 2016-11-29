//Alexis Trevizo + Julian Frank
//11.22.2016

var baseURL, apiKey, url, searchTerm, globalData;
var iterator;
var myTerms = [];

function setup(){
	noStroke();
	iterator = 0;
	createCanvas(600,600);
	myTerms[0] = "tacos";
	myTerms[1] = "cake";
	myTerms[2] = "fire%20extinguisher";
	baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	apiKey = "01b919a225a84165bed2acb3610cbe0b";
	searchTerm = "tacos";
	url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[0];
	
	loadJSON(url, dataReceived);

}

function draw(){
	background(100,63,175,142);
	
		if(globalData){ //test if data is available
		

		fill(255);
		text(globalData.response.docs[iterator].pub_date, width/2, height/2);
		


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
	iterator++;
	if(iterator > myTerms.length){
		iterator = 0;	
	}
	println(iterator);
	console.log(globalData.response.docs[iterator].pub_date);
	// url = baseURL + "?api-key=" + apiKey + "&q=" + myTerms[iterator];
	// loadNewData();
}

