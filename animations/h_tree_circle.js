



function setup() {
   

   	createCanvas(windowWidth, windowHeight);
	background(200);
	frameRate(200);

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
	angle = frameCount * PI/100;

	//checks red, blue and green values
	var red = localStorage.getItem("isRed");
	var green = localStorage.getItem("isGreen");
	var blue = localStorage.getItem("isBlue");
	
	var rClicked = false;
	var gClicked = false;
	var bClicked = false;

	if (red === "r") {
		rClicked = true;
	}
	if (green === "g") {
		gClicked = true;
	}
	if (blue === "b") {
		bClicked = true;
	}
	

	rColor = rClicked ? int(cos(frameCount*50)*255) : 0;
	gColor = gClicked ? int(cos(frameCount*50+2*PI/3)*255) : 0;
	bColor = bClicked ? int(cos(frameCount*50+4*PI/3)*255) : 0;

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
	translate(width/2, height);
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
	arc(0,-len/2,len,len,-drawAng, drawAng)
	arc(0, -len/2, len, len, drawAng, -drawAng)

	//keeps window centered, translates up by length
	translate(0, -len);
	//shortens length of next branch
	len*=1/sqrt(2);

	if (len>2) {
		//rotate canvas by angle
		//recursively call branch

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle);
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

		rotate(-angle);
		branch(len);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}