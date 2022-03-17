import {ChangeDetectionStrategy, Component} from '@angular/core';
import {productService} from "../services/product.service";
import {Product} from "../models/Product";
import {BehaviorSubject, combineLatest, find, map, merge, shareReplay, Subject, tap} from "rxjs";
import {currencyService} from "../services/currency.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent{
  pageTitle: string = 'Product List';
  private regionSelectedSubject = new BehaviorSubject<number>(1);
  regionSelectedAction$ = this.regionSelectedSubject.asObservable();
  private productSelectedSubject = new Subject<number>();
  productSelectedAction$ = this.regionSelectedSubject.asObservable();

  productList$ = this.productService.getData().pipe(
      map(products => products),
      tap(data => console.log('Products: ', JSON.stringify(data)))
  );

  currenciesList$ = this.currencyService.getData().pipe(
      map(currencies => currencies),
      tap(data => console.log('Currencies: ', JSON.stringify(data)))
  );

  selectedCurrency$ = combineLatest([
      this.currenciesList$,
      this.regionSelectedAction$])
      .pipe(
      map(([currencies , selectedCurrencyId]) =>
          currencies.filter(currency =>
              selectedCurrencyId ? currency.id === selectedCurrencyId : true
          )
      ), tap(data => console.log('Chosen currency: ', JSON.stringify((data))))
  );

  selectedProducts$ = combineLatest([
      this.productList$,
      this.productSelectedAction$])
      .pipe(
       map(([products, selectedProductId]) =>
            products.filter(product =>
                selectedProductId ? product.id === selectedProductId : true
            )
       ), tap(data => console.log('Chosen product: ', JSON.stringify((data))))
      );

  productsWithCalculation$ = combineLatest([
      this.productList$,
      this.selectedCurrency$])
      .pipe(
      map(([products, selectedRegion]) =>
      products.map(product => ({
            ...product,
            price: product.basePrice * selectedRegion.find(exchange => exchange)!.exchangeRate,
            currencyName: selectedRegion.find(currency => currency)?.name
          } as Product)))
      ,shareReplay(1)
      ,tap(data => console.log('Products after calculation: ', JSON.stringify(data))));

  constructor(
      private productService: productService,
      private currencyService: currencyService
  ) {}

  onSelected(regionId: string): void {
      console.log('regionId: ', regionId);
      this.regionSelectedSubject.next(+regionId);
  }

  addProductToCart(productId: number): void{
      console.log('productId: ', productId);
      this.productSelectedSubject.next(productId);
  }
}