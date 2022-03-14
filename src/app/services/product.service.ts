import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products'

  products$ = this.http.get<Product[]>(this.productsUrl)
      .pipe(
          tap(data => console.log('Products: ', JSON.stringify(data)))
      );

  constructor(private http: HttpClient) { }
}
