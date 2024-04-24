type DictCalc = {
    [key: string]: number;
}

function calc(num1: number, operator: string, num2: number): void {
  const calcObj: DictCalc = {
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
