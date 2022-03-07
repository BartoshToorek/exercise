import { Injectable } from '@angular/core';
import {CatFact} from "../models/CatFact";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

    catFact: CatFact[] = [];

  constructor(private httpClient: HttpClient) { }

  getRequest(): CatFact[] {
      this.httpClient.get<any>('https://catfact.ninja/fact')
          .subscribe(response =>{
            console.log("w serwisie: ",response);
            this.catFact = response;
          })
    return this.catFact
  }
}
