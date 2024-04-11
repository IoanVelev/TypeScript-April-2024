function largestNum(param1: number, param2: number, param3: number): void {
    const numArr = [param1, param2, param3];
    let res = numArr[0];

    numArr.forEach(x => {
        if (x > res) {
            res = x;
        }
    });

    console.log(`Largest number is ${res}.`);
    
}



largestNum(5, -3, 16);
largestNum(-3, -5, -22.5);

