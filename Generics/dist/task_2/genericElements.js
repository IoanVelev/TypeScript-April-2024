class CompareElement {
    array;
    constructor(input1) {
        this.array = input1;
    }
    compare(input2) {
        const res = this.array.filter(el => el === input2).length;
        return res;
    }
}
const elements = new CompareElement(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(elements.compare('b'));
let c = new CompareElement([1, 2, 3, 4, 5, 1, 1]);
console.log(c.compare(1));