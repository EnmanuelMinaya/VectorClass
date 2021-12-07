
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Number(Math.sqrt(this.x * this.x + this.y * this.y).toFixed(3));
    }

    dotProduct(v) {
        return (this.x * v.x + this.y * v.y);
    }

    angleBetween(v) {
        return Math.acos(this.dotProduct(v) / (this.length() * v.length()));
    }

}

module.exports = { Vector };