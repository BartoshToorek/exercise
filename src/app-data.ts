import {InMemoryDbService} from "angular-in-memory-web-api";
import {Product} from "./app/models/Product";
import {ProductData} from "./products/product-data";

export class AppData implements InMemoryDbService {

    createDb(): { products: Product[]} {
        const products = ProductData.products;
        return { products };
    }
}