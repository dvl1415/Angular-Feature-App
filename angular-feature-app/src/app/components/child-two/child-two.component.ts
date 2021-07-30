import { Component } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent {
  count = 0;
  
  increment(){
    this.count++
  }

  decrement(){
    this.count--
  }
}
