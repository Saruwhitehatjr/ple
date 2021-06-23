class Launcher
{
constructor(pointA,bodyB)
{
var options={
pointA:pointA,
bodyB:bodyB,
length:20,
stiffness:0.004
}
this.pointA=pointA;
this.bodyB=bodyB;
this.launcher =Matter.Constraint.create(options);
World.add(world,this.launcher)
}
display()
{
if(this.launcher.bodyB)
{
var pointA=this.launcher.pointA
var pointB=this.launcher.bodyB.position
stroke ("white")
strokeWeight(3);
line (pointA.x,pointA.y,pointB.x,pointB.y);
}}
fly()
{
this.launcher.bodyB=null;
}
}

function attach(body){

this.launcher.bodyA=body;

}