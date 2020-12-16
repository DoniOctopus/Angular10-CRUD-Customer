import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent } from './customer/customer-list/customer-list.component';
import {CustomerCreateComponent } from './customer/customer-create/customer-create.component'
import {CustomerUpdateComponent } from './customer/customer-update/customer-update.component'

const routes: Routes = [
  {path: 'customer', component:CustomerListComponent},
  {path: 'create-customer', component:CustomerCreateComponent},
  {path: '', redirectTo:'customer',pathMatch: 'full'},
  {path: 'update-customer', component:CustomerUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
