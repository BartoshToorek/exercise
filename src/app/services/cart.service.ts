import { Injectable } from '@angular/core';
import {productService} from "./product.service";
import {map, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList$ = this.productService.getData().pipe(
      map(products => products),
      tap(data => console.log('Products: ', JSON.stringify(data)))
  );


  constructor(private productService: productService) {}
}
