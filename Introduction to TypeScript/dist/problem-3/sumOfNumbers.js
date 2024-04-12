function sumNumbers(param1, param2) {
    const n = Number(param1);
    const m = Number(param2);
    let sum = 0;
    for (let index = n; index <= m; index++) {
        sum += index;
    }
    console.log(sum);
}
sumNumbers('-8', '20');
