import {Component} from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent{

    response$ = this.httpService.catFact$;

    constructor(private httpService: HttpService) {}

}
