class Dustbin{

    constructor(x,y,width,height){

        var options=
      {
         isStatic:true
      }
     
       this.width=width;
       this.height=height;
       this.body=Bodies.rectangle(x,y,width,height,options)

       World.add(world, this.body);

     
    }
    display(){

        var dustbinpos=this.body.position;

push()
translate(dustbinpos.x,dustbinpos.y);
rectMode(CENTER);
stroke("white")
fill("white");
rect(0,0,this.width,this.height)
pop()


    }




}

