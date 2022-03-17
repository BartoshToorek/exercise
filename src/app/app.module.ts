import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { CartComponent } from './cart/cart/cart.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent},
            { path: 'home', component: HomeComponent},
            { path: 'cart', component: CartComponent}
        ]),
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        HomeComponent,
        ProductListComponent,
        CartComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
