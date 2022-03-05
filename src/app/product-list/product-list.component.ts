import {Component, OnInit} from '@angular/core';
import {productService} from "../services/product.service";
import {Product} from "../models/Product";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [productService]
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  products: Product[] = [];
  currency: boolean = false;

  constructor(private productService: productService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  currencySwitch(): void{
    this.currency = !this.currency;
  }

}
