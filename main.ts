
class Point{
    constructor(private x?:number ,  private y?:number){ // ? is for optional , // an especial way to do private and it clean our code
    }
    draw(){
        console.log('X: ' + this.x +', Y: ' + this.y);
    }
    getX(){
        return this.x
    }
    setX(value){
        if(value>10)
            throw new Error('value must be less than 10');
        this.x = value;
    }

}

let point= new Point(3,4);
point.setX(5);
point.getX();
point.draw();



