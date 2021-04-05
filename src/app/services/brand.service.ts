import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';
import {IBrand} from '../models/IBrand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseUrl: string = environment.url.protocol + environment.url.url;

  getAll: string = this.baseUrl + environment.services.brand.getAll;

  constructor(private httpClient: HttpClient) { }

  getDeals(): Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.getAll);
  }

  getBrands(): Observable<IBrand[]>{
    return this.httpClient.get<IBrand[]>(this.getAll);
  }
}
