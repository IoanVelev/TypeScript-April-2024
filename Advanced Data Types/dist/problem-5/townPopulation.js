function townPopulation(input) {
    let obj = {};
    input.forEach((x) => {
        const line = x.split(" <-> ");
        const townName = line[0];
        const townPopulation = Number(line[1]);
        if (!obj[townName]) {
            obj[townName] = townPopulation;
        }
        else {
            obj[townName] += townPopulation;
        }
    });
    Object.keys(obj).forEach(x => {
        console.log(`${x}: ${obj[x]}`);
    });
}
townPopulation([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);
