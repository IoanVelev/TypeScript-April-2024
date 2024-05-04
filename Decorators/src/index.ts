import { Log } from "./logger";

class ProductService {
    @Log
    getProduct(id: number) {
        console.log(`Fetching product with id: ${id}`);
    }
}


const product = new ProductService();
product.getProduct(34);
