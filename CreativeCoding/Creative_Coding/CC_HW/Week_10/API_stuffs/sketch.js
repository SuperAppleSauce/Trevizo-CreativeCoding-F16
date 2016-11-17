//Alexis Trevizo Maybelline API test
//11.17.16


var myData;
var offset = 60;
var padding =50;
function preload(){
	var url = 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline';
	myData = loadJSON(url);
}
function setup(){

	createCanvas(3300,500);	
	for(var i = 0; i < myData.length; i++){
		println(myData[i].name);
	}
}

function draw(){

textSize(32);
fill(30,30,30);
text("Maybelline Data", padding, 100);
	for(var i = 0; i < myData.length; i++){
		var lipHeight = myData[i].rating;
		var priceProduct = myData[i].price;
		var rankProduct = myData[i].rating;
		var _g = map(rankProduct, 0, 5, 0, 255);
		
		fill(170,_g,0);
		rect((i * offset)+padding,height/2, 20, lipHeight*30);		
		textSize(14);
		text(priceProduct, (i * offset)+padding, height/2-20);	
	}

}