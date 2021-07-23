import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-test',
  template: `
  <div class = "container">
     <h1> Student Name : {{name}}</h1>
  </div>
 
 `,
  // templateUrl: './student-test.component.html',
  styleUrls: ['./student-test.component.css']
  // styles: [
  //   'h1 {color:red}'
  // ]
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
