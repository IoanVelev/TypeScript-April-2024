type HeroeInfo = {
  name: string;
  level: number;
  inventory?: string[];
};

function heroesRegistry(input: string[]): void {
  let output: HeroeInfo[] = [];

  for (const line of input) {
    const info: Array<string> = line.split(" / ");

    const items: string[] = info[2].split(", ");
    
    const name: string = info[0];
    const level: number = Number(info[1]);
    const inventory: string[] = items;

    let obj: HeroeInfo = {
      name,
      level,
      inventory,
    };

    output.push(obj);
  }

  const sortedOutput: HeroeInfo[] = output.sort((a, b) => a.level - b.level);

  sortedOutput.forEach(heroe => {
    if (heroe.inventory) {
        console.log(`Hero: ${heroe.name}`+ '\n' + `level => ${heroe.level}` + '\n' + `items => ${heroe.inventory.join(", ")}`);
    } else {
        console.log(`Hero: ${heroe.name}`+ '\n' + `level: ${heroe.level}`);
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
    ]
    );
