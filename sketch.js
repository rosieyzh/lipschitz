function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(0, 255, 0);
	background(200);
	frameRate(100);

	x=width / 2;
	y=height;
}

function draw() {
	background(200);

	stroke(50);
	fill(0);
	ellipse(x, y, 24, 24);

	x = x+random(-1, 1);
	y=y-1;

	if (y<0) {
		y=height;
	}
}