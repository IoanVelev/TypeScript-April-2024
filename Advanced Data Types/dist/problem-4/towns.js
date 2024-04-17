function towns(input) {
    let output = [];
    for (const line of input) {
        let info = line.split(" | ");
        const town = info[0];
        const latitude = Number(info[2]).toFixed(2).toString();
        const longitude = Number(info[1]).toFixed(2).toString();
        const obj = {
            town,
            latitude,
            longitude
        };
        output.push(obj);
    }
    output.map(res => {
        console.log(res);
    });
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
