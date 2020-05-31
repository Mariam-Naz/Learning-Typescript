
class Point{
   private x:number; //access modifier
    private y:number;

    constructor(x?:number , y?:number){ // ? is for optional
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X: ' + this.x +', Y: ' + this.y);
    }

}

let point= new Point(3,4);

point.draw();



