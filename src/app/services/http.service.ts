import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CatFact} from "../models/CatFact";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

    catFact$ = this.httpClient.get<CatFact>('https://catfact.ninja/fact')
        .pipe(
            tap(data => console.log("Fakt: ", JSON.stringify(data)))
        );
}
