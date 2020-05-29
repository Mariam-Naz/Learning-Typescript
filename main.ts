
// this is not a good approach xxx
// let drawPoint = (point:{x:number, y:number}) => {
//     //...
// }

interface Point{
    x:number,
    y:number
}
let drawPoint = (point:Point) => {
        //...
}
drawPoint({
    x:9,
    y:10
});


