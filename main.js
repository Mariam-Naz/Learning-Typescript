var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value > 10)
            throw new Error('value must be less than 10');
        this.x = value;
    };
    return Point;
}());
var point = new Point(3, 4);
point.setX(5);
point.getX();
point.draw();
