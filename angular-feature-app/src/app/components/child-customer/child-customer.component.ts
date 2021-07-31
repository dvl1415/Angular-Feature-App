import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-child-customer',
  templateUrl: './child-customer.component.html',
  styleUrls: ['./child-customer.component.css']
})
export class ChildCustomerComponent implements OnInit {

  @Input() message ?: string;
  @Input() customer ?: Customer 
  changeLog : string[] = [];
  

  constructor() { }

  ngOnInit(): void {
    console.log('This is ngOnInit of child Class')
  }

  ngOnChanges(changes : SimpleChanges){
    console.log('This is ngOnChanges of child Class')
    console.log(JSON.stringify(changes))

    for(const propName in changes) {
      const change = changes[propName]
      const to = JSON.stringify(change.currentValue)
      const from = JSON.stringify(change.currentValue)
      const changeLogData = `${propName} : changed from ${from} to ${to}`
      this.changeLog.push(changeLogData)
    }
  }

}
