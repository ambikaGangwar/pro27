class Bob{
    constructor(x,y,radius){
        var options={
            isStatic:true,
           // restitution:0.2,
           // friction:0.3,
           // density:1.2
}
     this.body = Bodies.circle(x,y,radius,options)
     this.radius = radius
     //this.image = loadImage("paper.png")
     World.add(world,this.body)
    }
    display(){
        ellipseMode(CENTER)
        
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height)
    }

}
