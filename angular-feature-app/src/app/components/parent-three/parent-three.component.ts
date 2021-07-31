// if we only use the view child it will work but it will throw an error so to resolve this 
// problem we have to work through the Life Cycle Method
import { Component, ViewChild } from '@angular/core';
import { ChildThreeComponent } from '../child-three/child-three.component';
import { ChangeDetectorRef } from '@angular/core'; //import ChangeDetectorRef
@Component({
  selector: 'app-parent-three',
  templateUrl: './parent-three.component.html',
  styleUrls: ['./parent-three.component.css']
})
export class ParentThreeComponent {

  constructor(private cdref: ChangeDetectorRef) { }
  ngAfterContentChecked(){
    //your code to update the model
    this.cdref.detectChanges();
 }
  @ViewChild(ChildThreeComponent) child?: ChildThreeComponent;

  increment(){
    this.child?.increment()
  }
  decrement(){
    this.child?.decrement()
  }
}
