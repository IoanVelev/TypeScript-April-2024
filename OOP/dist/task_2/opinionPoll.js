class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p1 = new Person("Peter", 12);
console.log(`${p1.name} is ${p1.age} years old`);
const p2 = new Person("Sofia", 33);
console.log(`${p2.name} is ${p2.age} years old`);
