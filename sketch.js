function setup() {
	createCanvas(windowWidth, windowHeight);
	stroke(0, 255, 0);
	background(200);
	frameRate(20);

	x=width / 2;
	y=height;
	rColor=0;
	gColor=255;
	bColor=0;
	colIncrease=50;
	noLoop();
	weight=4;
	weightDec=0.8;
}

function draw() {
	background(50);
	angle = PI/4;

	//start at bottom of window, in the middle
	translate(width/2, height);
	stroke(255);
	branch(height/4);


}

function branch(len) {
	//draw branch with certain length
	//negative len moves upwards
	strokeWeight(weight);
	stroke(rColor, gColor, bColor)
	line(0,0,0, -len);

	//keeps window centered, translates up by length
	translate(0, -len);
	//shortens length of next branch
	len*=1/sqrt(2);

	if (len>2) {
		//rotate canvas by angle
		//recursively call branch
		push();
		bColor+=colIncrease;
		weight*=weightDec;
		rotate(angle);
		branch(len);
		bColor-=colIncrease;
		weight=weight/weightDec;
		pop();

		push();
		bColor+= colIncrease;
		weight*= weightDec;
		rotate(-angle);
		branch(len);
		bColor-= colIncrease;
		weight= weight/weightDec;
		pop();
	}
}