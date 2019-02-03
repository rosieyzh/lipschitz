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
	add_length = (sin(frameCount*PI/20)+1)/4+1/2;
	skew = (sin(frameCount*PI/23)+1)*PI/8;

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
	n=140;
	translate(width/2, height-450);
    rotate(PI*sin(frameCount/50));
	stroke(255);
	branch(n);
    translate(0,n);
    rotate(2*PI/3);
    branch(n);
    translate(0,n);
    rotate(2*PI/3);
    branch(n);


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

	if (len>4) {
		//rotate canvas by angle
		//recursively call branch

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle-skew);
		branch(len*add_length);

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

		rotate(-angle-skew);
		branch(len*add_length);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}
