import {Component, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {ProductService} from "../services/product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent{
  pageTitle: string = 'Product List';
  products: Product[] = [];
  currency: boolean = false;

  productsList$ = this.productService.products$;

  constructor(private productService: ProductService) {
  }

  currencySwitch(): void{
    this.currency = !this.currency;
  }

}
