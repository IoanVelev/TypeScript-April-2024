type productInfo = string[];

type Product = {
  name: productInfo;
};

function solve(input: string[]): void {
  let productObj = {} as Product;

  for (let productLine of input) {
    let [town, product, price] = productLine.split(" | ");

    if (!productObj.hasOwnProperty(product)) {
      productObj[product] = [town, Number(price)];
    } else if (
      productObj.hasOwnProperty(product) &&
      price < productObj[product][1]
    ) {
      productObj[product][1] = price;
    }
  }

  const products = Object.keys(productObj);

  for (const key of products) {
    const town = productObj[key][0];
    const price = productObj[key][1];
    console.log(`${key} -> ${price} (${town})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
