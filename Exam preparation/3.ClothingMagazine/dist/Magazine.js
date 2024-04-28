"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes?.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const clothIndex = this.clothes.findIndex(clothEl => clothEl.color == color);
        let res = false;
        clothIndex !== -1 ? this.clothes.splice(clothIndex, 1) : '';
        clothIndex !== -1 ? res = true : res = false;
        return res;
    }
    getSmallestCloth() {
        const res = this.clothes.toSorted((a, b) => a.size - b.size)[0];
        return res.toString();
    }
    getCloth(color) {
        const cloth = this.clothes.find(clothEl => clothEl.color == color);
        return cloth.toString();
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let firstLineMessage = `${this.type} magazine contains:` + '\n';
        let clothRepostMessage = '';
        let sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        sortedBySize.forEach(cloth => {
            clothRepostMessage += `Product: ${cloth.type} with size ${cloth.size}, color ${cloth.color}` + '\n';
        });
        const finalRepostMessage = firstLineMessage + clothRepostMessage.trim();
        return finalRepostMessage;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map