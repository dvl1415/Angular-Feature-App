import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  countryList : Country[] = [
    new Country(1, "Canada"),
    new Country(2, "US"),
    new Country(3, "UK")

  ]

  getFormData(formData: any){
    console.log(formData.value)
  }
}
