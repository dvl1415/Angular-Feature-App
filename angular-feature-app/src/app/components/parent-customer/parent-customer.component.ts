import { Component, OnInit } from '@angular/core';
import {Customer} from 'src/app/models/customer.model';
@Component({
  selector: 'app-parent-customer',
  templateUrl: './parent-customer.component.html',
  styleUrls: ['./parent-customer.component.css']
})
export class ParentCustomerComponent implements OnInit {

  title = "Testing ngOnChanges"
  message = ""
  name = ""
  constructor() { }

  ngOnInit(): void {
  }

}
