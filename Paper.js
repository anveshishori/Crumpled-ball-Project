class Paper{
constructor(x,y,radius){
    var option = {
    restitution : 0.3,
    isStatic: false,
    friction:0.5,
    density: 2.5


}
this.body = Bodies.circle(x,y,radius, option)
this.radius = radius;

World.add(myworld, this.body);

}

display(){
var pos = this.body.position

push();
translate(pos.x,pos.y);

ellipseMode(RADIUS);
fill("yellow")
ellipse(0,0,this.radius, this.radius)
pop();
}



}