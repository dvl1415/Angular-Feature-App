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
}
