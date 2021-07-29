import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  title:string = 'Date Pipes'
  toDate:Date = new Date();
  casePipe = "UpperCase && LowerCase"
  message = "This Is a Case Pipe"
  slicePipe = "Welcome to the world of Angular"
  moneyPipe:number = 175
} 
