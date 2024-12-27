import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:44390/api/CatProductos';

  private http = inject(HttpClient);

  constructor() { }

  getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }
}
