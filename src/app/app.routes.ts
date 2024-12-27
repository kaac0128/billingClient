import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { BillingCreateComponent } from './domains/billing/pages/billing-create/billing-create.component';

export const routes: Routes = [
  {
    path: '',
    component: BillingCreateComponent
  }
];
