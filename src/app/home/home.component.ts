import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  host: {
    class:'home-container'
  },
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @HostBinding('class') class = 'home-container-1';
  
  constructor() { }

  ngOnInit(): void {
  }

  onToProductsClick() {
    
  }

}
