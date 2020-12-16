import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer= new Customer();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }


  saveCustomer(){
    this.customerService.createCustomer(this.customer).subscribe(data =>{
      console.log( "data masuk pertama kali ",data);
      this.gotoCustomerList();
    },error => console.log(error) );
  }

  gotoCustomerList() {
    this.router.navigate(['/customer']);
  }

  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }
}
