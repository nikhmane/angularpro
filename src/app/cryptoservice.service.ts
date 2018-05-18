import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Post } from './market/market';

import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CryptoserviceService {

  constructor(private http: Http) {

    console.log('Data Service Connected...');
     }
  
  
  
     getPrc(): Observable<Post[]> {
        return this.http.get("https://api.coinmarketcap.com/v2/listings/")
        .map((response: Response) => <Post[]>response.json().data);
     }



}
