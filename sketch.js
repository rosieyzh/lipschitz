function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(0, 255, 0);
	background(200);
	frameRate(60);

	x=width / 2;
	y=height;
}

function draw() {
	background(50);
	angle = PI / 3;

	//start at bottom of window, in the middle
	translate(width/2, height);
	stroke(255);
	branch(120);


}

function branch(len) {
	//draw branch with certain length
	//negative len moves upwards
	strokeWeight(2);
	line(0,0,0+random(-1,1), -len);

	//keeps window centered, translates up by length
	translate(0, -len);
	//shortens length of next branch
	len*=0.7;

	if (len>2) {
		//rotate canvas by angle
		//recursively call branch
		push();
		rotate(angle);
		branch(len);
		pop();

		push();
		rotate(-angle);
		branch(len);
		pop();
	}
}