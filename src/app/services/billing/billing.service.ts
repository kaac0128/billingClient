import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Billing } from '../../models/billing.model';
import { BillingRequest } from '../../models/BillingRequest.model';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  private apiUrl = 'https://localhost:44390/api/Factura';

  private http = inject(HttpClient);
  constructor() { }

  getFacturas(tipoBusqueda: string, valorBusqueda: string): Observable<Billing[]> {
    let params = new HttpParams()
      .set('tipoBusqueda', tipoBusqueda)
      .set('valorBusqueda', valorBusqueda);
    return this.http.get<Billing[]>(this.apiUrl, { params });
  }

  createFactura(factura: BillingRequest): Observable<number> {
    return this.http.post<number>(`${this.apiUrl}/create`, factura);
  }
}
