
class Point{
    x:number;
    y:number;

    constructor(x?:number , y?:number){ // ? is for optional
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X: ' + this.x +', Y: ' + this.y);
    }

    getDistance(another: Point){
        //..
    }
}

let point= new Point();
point.draw();



