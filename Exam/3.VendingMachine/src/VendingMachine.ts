import { Drink } from "./Drink";

export class VendingMachine {
  private buttonCapacity: number;
  private drinks: Drink[];

  constructor(buttonCapcity: number) {
    this.buttonCapacity = buttonCapcity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    let drink: Drink | undefined | boolean = this.drinks.find((drink) => drink.name == name);

    if (drink) {
      const drinkToRemove = this.drinks.indexOf(drink);
      this.drinks.splice(drinkToRemove, 1);
    }

    return drink ? true : false;
  }

  getLongest(): string {
    const biggestVolumeDrink = this.drinks.toSorted(
      (a, b) => b.volume - a.volume
    )[0];

    return biggestVolumeDrink.toString();
  }

  getCheapest(): string {
    const cheapestDrink = this.drinks.toSorted((a, b) => a.price - b.price)[0];

    return cheapestDrink.toString();
  }

  buyDrink(name: string): string {
    const boughtDrink = this.drinks.find((drink) => drink.name == name);

    return boughtDrink.toString();
  }

  getCount(): number {
    return this.drinks.length;
  }

  report(): string {
    let messageFirstLine: string = 'Drinks available:' + '\n';
    let messageReport: string = '';

    this.drinks.forEach(drink => {
        messageReport += `Name: ${drink.name}, Price: $${drink.price.toFixed(1)}, Volume: ${drink.volume} ml` + '\n'
    });

    let finalReport: string = messageFirstLine + messageReport.trim();

    return finalReport;
  }
}
