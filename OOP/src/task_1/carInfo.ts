
class Car {
    _brand: string;
    _model: string;
    _horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }

    get brand(): string {
        return this._brand;
    }

    set brand(newBrand: string) {
        this._brand = newBrand;
    }

    get model(): string {
        return this._model;
    }

    set model(newModel: string) {
        this._model = newModel;
    }

    get horsePower(): number {
        return this._horsePower;
    }

    set horsePower(newHp: number) {
        this._horsePower = newHp;
    }
}


const newCar = new Car("Chevrolet", "Impala", 390);
console.log(`The car is: ${newCar._brand} ${newCar._model} – ${newCar._horsePower} HP.`);


