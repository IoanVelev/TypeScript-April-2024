function printAndSum(num1, num2) {
    let sum = 0;
    let numbersOutput = "";
    for (let index = num1; index <= num2; index++) {
        sum += index;
        numbersOutput += index + " ";
    }
    console.log(numbersOutput);
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
