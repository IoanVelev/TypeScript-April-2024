function cats(input: Array<string>) {
    class Cat {
        constructor(private name: string, private age: string){
            this.name = name,
            this.age = age
        }

        meow(): void {
            console.log(`${this.name}, age ${this.age} says Meow`);
            
        }
    }

    for (let cat of input) {
        const [name, age] = cat.split(' ');
        const currentCat: Cat = new Cat(name, age);
        currentCat.meow();
        
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);