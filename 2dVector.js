
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    length() {
        return Number(Math.sqrt(this.x * this.x + this.y * this.y).toFixed(3));
    }

}

module.exports = { Vector };