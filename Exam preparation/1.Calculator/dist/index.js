function calc(num1, operator, num2) {
    const calcObj = {
        "+": num1 + num2,
        "-": num1 - num2,
        "*": num1 * num2,
        "/": num1 / num2,
    };
    console.log((calcObj[operator]).toFixed(2));
}
calc(5, "+", 10);
calc(25.5, "-", 3);
calc(9, "/", 2);
calc(7, "*", 5);
