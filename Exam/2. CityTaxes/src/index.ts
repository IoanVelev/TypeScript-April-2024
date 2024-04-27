type CityTax = {
    name: string,
    population: number,
    treasury: number,
    taxRate: 10,
    collectTaxes(): void,
    applyGrowth(percentage: number): void,
    applyRecession(percentage: number): void
}


function cityTaxes(name: string, population: number, treasury: number): CityTax {
let obj: CityTax = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes(){
        this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percentage: number){
        this.population += Math.floor(this.population * percentage / 100);
    },
    applyRecession(percentage: number){
        treasury -= Math.floor(treasury * percentage / 100);
    }
}

return obj;
}

// const city = 
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// console.log(city);

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
  city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

