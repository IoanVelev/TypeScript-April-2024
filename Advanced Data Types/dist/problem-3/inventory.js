function heroesRegistry(input) {
    let output = [];
    for (const line of input) {
        const info = line.split(" / ");
        const items = info[2].split(", ");
        const name = info[0];
        const level = Number(info[1]);
        const inventory = items;
        let obj = {
            name,
            level,
            inventory,
        };
        output.push(obj);
    }
    const sortedOutput = output.sort((a, b) => a.level - b.level);
    sortedOutput.forEach(heroe => {
        if (heroe.inventory) {
            console.log(`Hero: ${heroe.name}` + '\n' + `level => ${heroe.level}` + '\n' + `items => ${heroe.inventory.join(", ")}`);
        }
        else {
            console.log(`Hero: ${heroe.name}` + '\n' + `level: ${heroe.level}`);
        }
    });
}
heroesRegistry([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroesRegistry([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
