import { BillingDetails } from "./billing-details.model";

export interface Billing {
  id: number;
  fechaEmisionFactura: Date;
  idCliente: number;
  clienteRazonSocial: string;
  numeroFactura: number;
  numeroTotalArticulos: number;
  subTotalFacturas: number;
  totalImpuestos: number;
  totalFactura: number;
  detallesFactura: BillingDetails[];
}
