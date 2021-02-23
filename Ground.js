class Ground{
    // common characters
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        var option={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);

    }
    display(){
       push ();
        rectMode(CENTER)
        fill ("grey")
        rect(this.body.position.x, this.body.position.y, this.width, this.height)
        pop ();
    }
}