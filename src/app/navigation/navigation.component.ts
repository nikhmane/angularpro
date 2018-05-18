import { Component, OnInit } from '@angular/core';

import { CryptoserviceService } from '../cryptoservice.service';

@Component({
  selector: 'app-navigation',
  template:`
  <app-register></app-register>
  <app-signin></app-signin>
  <app-market></app-market>
  `,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css','./log1.css','./nav.css','../app.component.css']
})
export class NavigationComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {

    
  }

}
