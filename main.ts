
class Point{
    constructor(private _x?:number ,  private _y?:number){ // ? is for optional , // an especial way to do private and it clean our code
    }
    draw(){
        console.log('X: ' + this._x +', Y: ' + this._y);
    }
    get x(){  //property concept
        return this._x
    }
    set x(value){
        if(value>10)
            throw new Error('value must be less than 10');
        this._x = value;
    }

}

let point= new Point(3,4);
let x = point.x;  //property thats why no pbrackets
point.x = 8;
point.draw();



