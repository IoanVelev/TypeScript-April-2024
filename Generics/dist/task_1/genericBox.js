class Box {
    param;
    constructor(param) {
        this.param = param;
    }
    toString() {
        return `${this.param} is of type ${typeof this.param}`;
    }
}
const box1 = new Box('Despacito');
const box2 = new Box([1, 2, 3]);
const box3 = new Box(true);
console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
