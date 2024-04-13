function cats(input) {
    class Cat {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.name = name,
                this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let cat of input) {
        const [name, age] = cat.split(' ');
        const currentCat = new Cat(name, age);
        currentCat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);
