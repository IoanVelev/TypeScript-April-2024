function mathOperations(num1: number, num2: number, operator: string) {
    const obj: Object = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 % num2,
        '**': num1 ** num2
    }

    console.log(obj[operator]);
    
}

mathOperations(3, 5.5, '*');