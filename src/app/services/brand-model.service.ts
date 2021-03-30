import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrandModel } from '../models/brand-model';

@Injectable({
  providedIn: 'root'
})
export class BrandModelService {

  baseUrl: string = environment.url.protocol + environment.url.url;

  getAll:string = this.baseUrl + environment.services.brandModel.getAll;

  constructor(private httpClient:HttpClient) { }

   getDeals():Observable<BrandModel[]>{
     return this.httpClient.get<BrandModel[]>(this.getAll);
   }
}
