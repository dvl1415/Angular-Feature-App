import { Component, OnInit, ViewChild } from '@angular/core';
import {Customer} from 'src/app/models/customer.model';
import { ChildCustomerComponent } from '../child-customer/child-customer.component';
@Component({
  selector: 'app-parent-customer',
  templateUrl: './parent-customer.component.html',
  styleUrls: ['./parent-customer.component.css']
})
export class ParentCustomerComponent implements OnInit {

  title = "Testing ngOnChanges"
  message = ""
  code ?: number;
  name = ""
  customer : Customer = new Customer();
  @ViewChild(ChildCustomerComponent) child ?: ChildCustomerComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.child)
  }

  ngOnChanges(){
    console.log(this.child)
  }

  ngDoCheck(){
    console.log(this.child)
  }

  ngAfterViewInit(){
    console.log(this.child)
  }
  ngAfterViewChecked(){
    console.log(this.child)
  }

  updateCustomer(){
    //1st Solution 
    //this.customer = new Customer();
    this.customer.name = this.name
    this.customer.code = this.code;
    //2nd Solution

  }

}
