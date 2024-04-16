function calorieObject(input) {
    let output = [];
    let res = "";
    for (let index = 0; index < input.length; index += 2) {
        const product = input[index];
        const calories = Number(input[index + 1]);
        let obj = {
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
