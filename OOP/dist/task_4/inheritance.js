class Animal {
    eat() {
        console.log('eating…');
    }
}
class Dog extends Animal {
    bark() {
        console.log('barking…');
    }
}
class Cat extends Animal {
    meow() {
        console.log('meowing…');
    }
}
const newDog = new Dog();
newDog.bark();
newDog.eat();
const newCat = new Cat();
newCat.meow();
