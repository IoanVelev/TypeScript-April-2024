function mathOperations(num1, num2, operator) {
    const obj = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 % num2,
        '**': num1 ** num2
    };
    console.log(obj[operator]);
}
mathOperations(3, 5.5, '*');
