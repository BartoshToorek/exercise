import {Injectable} from "@angular/core";
import {Currency} from "../models/Currency";
import {from, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class currencyService{

    currencies: Currency[] = [
        {
            id: 1,
            region: 'EU',
            name: 'EUR',
            exchangeRate: 1.0
        },
        {
            id: 2,
            region: 'NA',
            name: 'USD',
            exchangeRate: 1.11
        }
    ]

    getData(): Observable<Currency[]>{
        return from([this.currencies]);
    }

}