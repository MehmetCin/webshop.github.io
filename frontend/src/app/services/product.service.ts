import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private requestUrl = "https://api.jsonbin.io/b/61961cd262ed886f9150bd71/1"

  constructor(
    private http: HttpClient
  ) { }

  getProductDetails():Observable<Product> {
    return this.http.get<Product>(this.requestUrl)
  }
}
