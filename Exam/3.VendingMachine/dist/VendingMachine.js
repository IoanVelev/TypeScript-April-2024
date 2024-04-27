"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapcity) {
        this.buttonCapacity = buttonCapcity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        let drink = this.drinks.find((drink) => drink.name == name);
        if (drink) {
            const drinkToRemove = this.drinks.indexOf(drink);
            this.drinks.splice(drinkToRemove, 1);
        }
        return drink ? true : false;
    }
    getLongest() {
        const biggestVolumeDrink = this.drinks.toSorted((a, b) => b.volume - a.volume)[0];
        return biggestVolumeDrink.toString();
    }
    getCheapest() {
        const cheapestDrink = this.drinks.toSorted((a, b) => a.price - b.price)[0];
        return cheapestDrink.toString();
    }
    buyDrink(name) {
        const boughtDrink = this.drinks.find((drink) => drink.name == name);
        return boughtDrink.toString();
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        let messageFirstLine = 'Drinks available:' + '\n';
        let messageReport = '';
        this.drinks.forEach(drink => {
            messageReport += `Name: ${drink.name}, Price: $${drink.price.toFixed(1)}, Volume: ${drink.volume} ml` + '\n';
        });
        let finalReport = messageFirstLine + messageReport.trim();
        return finalReport;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map