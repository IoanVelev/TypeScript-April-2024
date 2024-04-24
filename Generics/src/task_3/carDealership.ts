interface Dealership<T> {
    dealershipName: T,
    soldCars: number
}

interface Action<T> {
    sellCar(dealerId: T, model: T): void
}

class CarDealership<T> implements Dealership<T>, Action<T> {
    public modelsSold = {};
    dealershipName: T;
    soldCars = 0;

    constructor(dealershipName: T){
        this.dealershipName = dealershipName;
    }

    sellCar(dealerId: T, model: T): void {
        this.modelsSold[`${dealerId}`] = model;
        this.soldCars++;
    }

    showDetails(): string {
        const dealership = this.dealershipName;
        let message = `${dealership}` + '\n';
        for (const key in this.modelsSold) {
            message += `${key} sold ${this.modelsSold[key]}` + '\n';
        }

        return message.trim();
    }
}

let dealership = new CarDealership('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
