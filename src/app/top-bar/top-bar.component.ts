import {Component, OnInit} from '@angular/core';
import {HttpService} from "../services/http.service";
import {CatFact} from "../models/CatFact";

@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit{
    languages: any[] = [
        {name: 'EU'},
        {name: 'NA'}
    ]

    response: CatFact[] =[];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {
        this.response = this.httpService.getRequest();
        console.log("co tam siedzi: ",this.response)
    }
}
