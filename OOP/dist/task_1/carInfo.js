class Car {
    _brand;
    _model;
    _horsePower;
    constructor(brand, model, horsePower) {
        this._brand = brand;
        this._model = model;
        this._horsePower = horsePower;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newModel) {
        this._model = newModel;
    }
    get horsePower() {
        return this._horsePower;
    }
    set horsePower(newHp) {
        this._horsePower = newHp;
    }
}
const newCar = new Car("Chevrolet", "Impala", 390);
console.log(`The car is: ${newCar._brand} ${newCar._model} – ${newCar._horsePower} HP.`);
