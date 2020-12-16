import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CustomerService} from '../../customer.service';
import {Customer} from '../../customer';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.scss']
})
export class CustomerUpdateComponent implements OnInit {

  id: number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data => {
      console.log(data);
      this.customer = data;
    },error => console.log(error));
  }
  
  onSubmit(){
    this.customerService.updateCustomer(this.id, this.customer).subscribe( data =>{
      console.log(data);
      this.goToCustomerList();
    }, error => console.log(error));
  }

  goToCustomerList(){
    this.router.navigate(['/customer']);
  }

}
