import { Cloth } from "./Cloth";

export class Magazine {
    clothes: Cloth[];

    constructor(private type: string, private capacity: number){
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.clothes?.length < this.capacity) {
            this.clothes.push(cloth)
        } 
    }

    removeCloth(color: string): boolean {
        const clothIndex = this.clothes.findIndex(clothEl => clothEl.color == color);
        let res: boolean = false;
        

        clothIndex !== -1 ? this.clothes.splice(clothIndex, 1) : '';
        clothIndex !== -1 ? res = true : res = false;

        return res;
    }

    getSmallestCloth(): string {
        const res: Cloth = this.clothes.toSorted((a, b) => a.size - b.size)[0];

        return res.toString();
    }

    getCloth(color: string): string {
        const cloth = this.clothes.find(clothEl => clothEl.color == color);

        return cloth.toString();
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        let firstLineMessage: string = `${this.type} magazine contains:` + '\n';
        let clothRepostMessage: string = '';

        let sortedBySize: Cloth[] =  this.clothes.sort((a, b) => a.size - b.size);

        sortedBySize.forEach(cloth => {
            clothRepostMessage += `Product: ${cloth.type} with size ${cloth.size}, color ${cloth.color}` +'\n';
        })

        const finalRepostMessage: string = firstLineMessage + clothRepostMessage.trim();

        return finalRepostMessage;
    }
}