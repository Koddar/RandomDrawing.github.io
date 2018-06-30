//Randomly Drawing Program

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(225);

}

var x = 500;
var y = 300;

var minus = (-(((windowHeight * windowWidth) / 200) * 0.006)); 
var plus = (((windowHeight * windowWidth) / 200) * 0.006);

function draw() {

	var x2 = x;
	var y2 = y;

	fill(255);
	noStroke();
	
	x = x + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));
	y = y + random(-(((windowHeight * windowWidth) / 200) * 0.006), (((windowHeight * windowWidth) / 200) * 0.006));

	while(x < 0 || x > windowWidth){
		x = x + random(-15, 15);
	}

	while(y < 0 || y > windowHeight){
		y = y + random(-15, 15);
	}

	//ellipse(x, y, 10, 10);
	
	stroke(30, 70, 200, random(50, 50));
	strokeWeight(((windowHeight * windowWidth) / 200) * 0.01);
	line(x, y, x2, y2);

	//console.log("x:",x,"x2:",x2);

}
