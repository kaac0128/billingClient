import { Component } from '@angular/core';
import { ProductService } from '../../../../services/product/product.service';
import { ClientService } from '../../../../services/client/client.service';
import { Client } from '../../../../models/client.model';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-billing-create',
  imports: [],
  templateUrl: './billing-create.component.html',
  styleUrl: './billing-create.component.css'
})
export class BillingCreateComponent {

  clients: Client[] = [];

  products: Product[] = [];


  constructor(private productService: ProductService, private clientService: ClientService) {}
  ngOnInit() {
    this.loadClients();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((data: Client[]) => {
      this.clients = data;
    });
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}
