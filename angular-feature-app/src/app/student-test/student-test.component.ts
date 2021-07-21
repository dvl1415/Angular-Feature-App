import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-test',
  templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
})
export class StudentTestComponent implements OnInit {

  name = "Dhaval"
  constructor() { }

  ngOnInit(): void {
  }

  getMessage(){
    let code = "Hello"
    this.name = "Dhaval"
  }
  displayMessage(){

  }
}
