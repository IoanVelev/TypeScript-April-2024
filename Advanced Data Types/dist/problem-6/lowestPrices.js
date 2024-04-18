function lowestPrices(input) {
    let obj = {};
    input.forEach(line => {
        let info = line.split(" | ");
        const city = info[0];
        const productName = info[1];
        const price = Number(info[2]);
        if (!obj[productName]) {
            obj[productName] = [city, price];
        }
        else if (obj[productName] && obj[productName][1] > price) {
            obj[productName] = [city, price];
        }
    });
    Object.keys(obj).forEach(key => {
        const city = obj[key][0];
        const price = obj[key][1];
        console.log(`${key} -> ${price} (${city})`);
    });
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
