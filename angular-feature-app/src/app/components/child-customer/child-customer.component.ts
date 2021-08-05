import { Component, Input, OnInit, SimpleChanges, DoCheck, OnChanges } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-child-customer',
  templateUrl: './child-customer.component.html',
  styleUrls: ['./child-customer.component.css']
})
export class ChildCustomerComponent implements OnInit, OnChanges, DoCheck{

  @Input() message ?: string;
  @Input() customer : Customer = new Customer();

  @Input() oldCustomer : Customer = new Customer();
  changeLog : string[] = [];
  doCheckCount:number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log('This is ngOnInit of child Class')
    this.oldCustomer = Object.assign({}, this.customer)
  }

  ngOnChanges(changes : SimpleChanges){
    // console.log('This is ngOnChanges of child Class')
    console.log(JSON.stringify(changes))

    for(const propName in changes) {
      const change = changes[propName]
      const to = JSON.stringify(change.currentValue)
      const from = JSON.stringify(change.currentValue)
      const changeLogData = `${propName} : changed from ${from} to ${to}`
      this.changeLog.push(changeLogData)
     // console.log(this.changeLog)
    }
  }

  ngDoCheck(){
    console.log('This is ngDoCheck')
    this.doCheckCount++;

    if(this.oldCustomer.name !== this.customer.name || 
      this.oldCustomer.code !== this.customer.code){
        const to = JSON.stringify(this.customer)
        const from = JSON.stringify(this.oldCustomer)
        const changeLogInfo = `DoCheck Customer : changed from ${from} to ${to}`
        this.changeLog.push(changeLogInfo)
        this.oldCustomer = Object.assign({}, this.customer)
    }
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
