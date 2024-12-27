import { BillingDetails } from "./billing-details.model";
import { Billing } from "./billing.model";
import { Client } from "./client.model";
import { Product } from "./product.model";

export interface BillingRequest {
  billing: Billing;
  billingDetails: BillingDetails[];
  client: Client;
  products: Product[];
}
