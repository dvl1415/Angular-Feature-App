import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent {
  @Input() count : number=0;
  @Output() countChanged : EventEmitter<number> = new EventEmitter()

  increment() {
    this.count++;
    this.countChanged.emit(this.count)
  }
  decrement() {
    this.count--;
    this.countChanged.emit(this.count)
  }
}
