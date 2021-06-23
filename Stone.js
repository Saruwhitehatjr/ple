class Stone
{
constructor(x,y)
{var options={
 isStatic:false,
 restitution:0,
 friction:1,
 density:1.2
}
this.x=x;
this.y=y;
this.r=60;
this.image=loadImage("stone.png")
this.body=Bodies.circle(this.x,this.y,60,options);
World.add(world,this.body);
}
display()
{
var pos = this.body.position
push ();
imageMode (CENTER);
translate (pos.x,pos.y);
//rotate (this.body.angle)
image (this.image,0,0,60,60);
pop ();
}
}