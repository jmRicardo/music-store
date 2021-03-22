import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  baseUrl: string = environment.url.protocol + environment.url.url;

  getAll:string = this.baseUrl + environment.services.brand.getAll;

  constructor(private httpClient:HttpClient) { }

  getDeals():Observable<Card[]>{
    return this.httpClient.get<Card[]>(this.getAll);
  }
}
