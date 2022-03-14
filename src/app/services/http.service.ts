import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {CatFact} from "../models/CatFact";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private catFactUrl = 'https://catfact.ninja/fact'

  constructor(private http: HttpClient) { }

    catFact$ = this.http.get<CatFact>(this.catFactUrl)
        .pipe(
            tap(data => console.log("Fakt: ", JSON.stringify(data)))
        );
}
