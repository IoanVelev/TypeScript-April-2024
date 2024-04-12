function sumNumbers(param1: string, param2: string): void {
const n = Number(param1);
const m = Number(param2);
let sum: number = 0;

for (let index = n; index <= m; index++) {
    sum += index;
}

console.log(sum);

}

sumNumbers('-8', '20');