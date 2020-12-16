import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Customer } from 'src/app/customer';
import { CustomerService } from 'src/app/customer.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customer:Customer[];
  closeResult: string;

  constructor(private customerService:CustomerService,private modalService:NgbModal,
  private router:Router){ }

  deleteModal(content1) {
    this.modalService.open(content1, { size: 'sm' });
  }
  viewModal(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  ngOnInit(): void {
    this.getCustomer();
    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd) {
        // close all open modals
        this.modalService.dismissAll();        
      }

    });
  }

  private getCustomer(){
    this.customerService.getCustomerList().subscribe(data => {
      console.log(data);
      this.customer = data;
    });
  }

  customerDetails(id:number){
    this.router.navigate(['details-customer',id])
  }

  updateCustomer(id:number){
    this.router.navigate(['update-customer',id])
  }

  deleteCustomer(id:number){
    this.customerService.deleteCustomer(id).subscribe(data => {
      console.log(data);
      this.getCustomer();
    })
  }
}
