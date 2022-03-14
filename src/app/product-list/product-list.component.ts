import {Component, OnInit} from '@angular/core';
import {productService} from "../services/product.service";
import {Product} from "../models/Product";
import {Observable} from "rxjs";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [productService]
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  currency: boolean = false;

  productsList$: Observable<Product[]>;

  constructor(private productService: productService) {
  }

  ngOnInit() {
    this.productService.getData().subscribe((productList: Product[]) =>{
      this.productsList$ = productList;
    });
  }

  currencySwitch(): void{
    this.currency = !this.currency;
  }

}