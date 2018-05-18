import { Component, OnInit } from '@angular/core';
import { Post } from './market';
import { CryptoserviceService } from '../cryptoservice.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  posts: Post[];

  constructor(private cryptoService: CryptoserviceService) { }

  ngOnInit() {

    this.cryptoService.getPrc().subscribe((data) => {
      //console.log(data);
      this.posts = data;
    })
  }

}
