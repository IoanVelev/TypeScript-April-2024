class Animal {
    eat(): void {
        console.log('eating…');
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('barking…');
    }
}

class Cat extends Animal {
    meow(): void {
        console.log('meowing…');
    }
}

const newDog = new Dog();
newDog.bark();
newDog.eat();
const newCat = new Cat();
newCat.meow();