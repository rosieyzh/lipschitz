function setup() {
	createCanvas(windowWidth, windowHeight);
	background(200);
	frameRate(200);

	x=width / 2;
	y=height;
	rColor=0;
	gColor=0;
	bColor=0;
	rColInc=15;
	bColInc=15;
	gColInc=15;
	weight=4;
	weightDec=0.8;
}

function draw() {
	background(50);
	angle = frameCount * PI/100 + PI/4;
	//skew = frameCount * PI/110;
    skew = 0;

	rColor = int(cos(frameCount/150)*255);
	gColor = int(cos(frameCount/150+2*PI/3)*255);
	bColor = int(cos(frameCount/150+4*PI/3)*255);

	if (gColor < 0 ) {
		gColor=0;
	}

	if (rColor < 0 ) {
		rColor=0;
	}

	if (bColor < 0 ) {
		bColor=0;
	}

	//(gColor + frameCount/10) % 255;

	//start at bottom of window, in the middle

    translate(width/2, height-450);


    // some variable to mess with
    n=40;
    p=40;
    q=65;
    x=55;
    spawn_len = 40 + 8*sin(frameCount/25);
    //spawn(140);
    

    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);

    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len/2);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);

    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);

    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len/2);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);


    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);

    translate(-200*sin(frameCount/q),-300*cos(frameCount/q));
    rotate(frameCount/x);
    spawn_line(spawn_len/2);
    rotate(-frameCount/x);
    translate(200*sin(frameCount/q),300*cos(frameCount/q));

    rotate(PI/3);

// dots /////////////////////////////////////////////////////////////////


    rotate(PI/6);
    rotate(frameCount/25);
    translate(0,-100);
    branch_dot(40);
    translate(0,40);
    translate(0,100);

    rotate(2*PI/3);
    translate(0,-100);
    branch_dot(40);
    translate(0,40);
    translate(0,100);

    rotate(2*PI/3);
    translate(0,-100);
    branch_dot(40);
    translate(0,40);
    translate(0,100);
    rotate(2*PI/3-PI/6)



// centre circle ///////////////////////////////////////////////////////



    rotate(PI/3);
    //circle(150);
    noFill();
    circle_branch(90);




}

function spawn_line(len){
    
    stroke(255);
	branch(len);
    translate(0,len);
    rotate(2*PI/3);
    branch(len);
    translate(0,len);
    rotate(2*PI/3);
    branch(len);
    rotate(2*PI/3);

}

function spawn_semi(len){

    stroke(255);
	branch_semi(p);
    translate(0,p);
    rotate(2*PI/3);
    branch_semi(p);
    translate(0,p);
    rotate(2*PI/3);
    branch_semi(p);
    rotate(2*PI/3);

}



function circle_branch(r) {
    
    // fractal - circle rotating aroud circle

    inv_speed=45;
    noFill();
    circle(0,0,r+20*sin(frameCount/20));
    r*=1/sqrt(2);

    if (r>4){

        push();
        rColor+=rColInc;
        gColor+=gColInc;
        bColor+=bColInc;
        weight*=weightDec;
        rotate(-frameCount/inv_speed);
        translate(0,-r);
        inv_speed*=1.5;

        circle_branch(r);

        inv_speed = inv_speed/1.5;
        rColor-=rColInc;
        gColor-=gColInc;
        bColor-=bColInc;
        weight=weight/weightDec;
        pop();
            
    }
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

	if (len>8) {
		//rotate canvas by angle
		//recursively call branch
		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle+skew);
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

		rotate(-angle+skew);
		branch(len);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}


function branch_semi(len) {
	//draw branch with certain length
	//negative len moves upwards
	strokeWeight(weight);
	stroke(rColor, gColor, bColor)
	noFill();
	//fill(rColor, gColor, bColor)
	arc(0,-len/2,len,len,-drawAng, drawAng)

	//keeps window centered, translates up by length
	translate(0, -len);
	//shortens length of next branch
	len*=1/sqrt(2);

	if (len>8) {
		//rotate canvas by angle
		//recursively call branch

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle);
		branch_semi(len); // here is the reccursion

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
		branch_semi(len); // here it is again

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}

function branch_dot(len) {
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

	if (len>2) {
		//rotate canvas by angle
		//recursively call branch

		push();
		rColor+=rColInc;
		gColor+=gColInc;
		bColor+=bColInc;
		weight*=weightDec;

		rotate(angle);
		branch_dot(len);

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
		branch_dot(len);

		rColor-=rColInc;
		gColor-=gColInc;
		bColor-=bColInc;
		weight= weight/weightDec;
		pop();
	}
}


