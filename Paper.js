class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false			
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x,this.y,this.r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER)
			//strokeWeight(4);
            imageMode(CENTER);
			fill(128,128,128)
			image(this.image,0,0,this.r,this.r);
			pop()
			
	}

}