const { Vector } = require('vectorkata');


const vx = 3
const vy = 3
const bx = 2
const by = 4


const v = new Vector(vx, vy);
const b = new Vector(bx, by);

console.log(v.length())
console.log(v.angleBetween(b))
console.log(v.dotProduct(b))
