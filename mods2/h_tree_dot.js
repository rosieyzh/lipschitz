function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	frameRate(1.0/25.0);

	x=width / 2;
	y=height;
	rColor=0;
	gColor=0;
	bColor=0;
	rColInc=30;
	bColInc=30;
	gColInc=30;
	weight=4;
	weightDec=0.8;
	drawAng=PI/2;
}

function draw() {
	background(50);
	angle = frameCount * PI/7;

	rColor = int(cos(frameCount*50)*255);
	gColor = int(cos(frameCount*50+2*PI/3)*255);
	bColor = int(cos(frameCount*50+4*PI/3)*255);

	if (gColor < 0 ) {
		gColor=0;
	}

	if (rColor < 0 ) {
		rColor=0;
	}

	if (bColor < 0 ) {
		bColor=0;
	}


	//start at bottom of window, in the middle
	translate(width/2, height-100);
	stroke(255);
	branch(250);


}

function branch(len) {
	//draw branch with certain length
	//negative len moves upwards
	strokeWeight(weight);
	stroke(rColor, gColor, bColor)
	noFill();
	//fill(rColor, gColor, bColor)
	//line(0,0,0,-len)
	arc(-len, -len/2, sqrt(5/4),sqrt(5/4),-atan(1/2), atan(1/2))

	//keeps window centered, translates up by length
	translate(0, -len);
	//shortens length of next branch
	len*=1/sqrt(2);

	if (len>0.01) {
		//rotate canvas by angle
		//recursively call branch

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle+random(-1.1,1.1));
		branch(len);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight=weight/weightDec;
		pop();

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*= weightDec;

		rotate(-angle+random(-1.1,1.1));
		branch(len);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}
