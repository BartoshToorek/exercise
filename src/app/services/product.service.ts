import {Product} from "../models/Product";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class productService {

    getProducts(): Array<Product> {
        return [
            {
                id: 1,
                name: 'SAP TASSE SCHWARZ',
                price: 13.19,
                description: 'A cup you didn\'t want to miss. Thanks to its softtouch effect, the SAP porcelain cup is very special. The engraved logo looks very elegant on the black background color and fits well with the colored inside in SAP Gold. This is a cup you will keep in mind.'
            },
            {
                id: 2,
                name: 'SAP "50 YEARS EDITION" HOODIE UNISEX',
                price: 59.90,
                description: 'SAP "50 YEARS" unisex hoodie is part of the high-quality SAP collection 2022. Natural fashion made from sustainable, organic materials in a timeless, modern design with high-quality. The outer packaging of the textiles is made from production waste in order to use them sensibly and to avoid plastic. Textiles to feel good, without harming nature and the environment!'
            },
            {
                id: 3,
                name: 'SAP Grandma Irmgard\'s carrot cake',
                price: 43.07,
                description: 'Grandma Irmgard\'s carrot cake is known far beyond Munich\'s city. With its wonderful almond and cinnamon aroma, the fine lemon glaze and sweet wildflower decoration, it has a number of fans, including the investors: inside from "Shark Tank". But it is not only a highlight in terms of taste, but also optically and a real eye-catcher on your cake table. This makes our mini carrot cake particularly delicious almond and cinnamon flavor super juicy thanks to the many fresh carrots gradually developing its full flavor'
            },
            {
                id: 4,
                name: 'SAP recycled cotton bag',
                price: 5.36,
                description: '145gr recycled cotton bag with a 6cm wide bottom for lots of storage.'
            }
        ];
    }
}

