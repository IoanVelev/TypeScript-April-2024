type Calorie = {
  product: string;
  calories: number;
};

function calorieObject(input: Array<string>): void {
  let output: Calorie[] = [];

  let res: string = "";
  
  for (let index = 0; index < input.length; index += 2) {
    const product: string = input[index];
    const calories: number = Number(input[index + 1]);

    let obj: Calorie = {
      product,
      calories,
    };
    output.push(obj);
  }

  output.forEach((x) => {
    // console.log(`${x.product}: ${x.calories}`);
    res = res + `${x.product}: ${x.calories}` + " ";
  });
  console.log(`{ ${res} }`);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
