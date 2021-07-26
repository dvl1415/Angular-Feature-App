import { Component } from '@angular/core';

@Component({
  // selector: 'app-root',
  // selector: '[app-root]',
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interPolation = 'One-Way Data Binding';
  // title = 'angular-feature-app';
  firstName = 'Dhaval';
  lastName = 'Patidar';
  person = {name: 'DVl'}

  propertyBinding = "Property Binding"
  innerText = "This Value is coming from the component"
  isDisabled = true;
  url = "https://angular.io/cli"

  eventBinding = "Event Binding"
  counter = 0;

  clickMe(){
    this.counter++
    console.log(`You Clicked me ${this.counter} times`)
  }

  twoWayDataBinding = "Two Way Data Binding"
  fName ='Dvl';
  lName ='Patel';

  getFullName(){
    console.log(this.fName + ' ' + this.lName)
    return this.fName + ' ' + this.lName
  }
}
