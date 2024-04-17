type Town = {
    town: string,
    latitude: string,
    longitude: string
}


function towns(input: Array<string>) {
    let output: Town[] = [];

    for (const line of input) {
        let info = line.split(" | ");

        const town: string = info[0];
        const latitude: string = Number(info[2]).toFixed(2).toString();
        const longitude: string = Number(info[1]).toFixed(2).toString();

        const obj: Town = {
            town,
            latitude,
            longitude
        }

        output.push(obj);
    }

    output.map(res => {
        console.log(res); 
    });
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);