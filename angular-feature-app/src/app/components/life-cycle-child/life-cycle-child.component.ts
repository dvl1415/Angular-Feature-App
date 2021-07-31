import { Component, DoCheck, Input, OnChanges, OnInit, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input() title?: string
  constructor(private http: HttpClient) { 
    console.log('This is Constructor of child')
  }

  ngOnChanges(){
    console.log('This is OnChanges Hook of child')
  }

  ngOnInit(): void {
    console.log('This is NgOnInit of child')
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      console.log(data)
    })
  }

  ngDoCheck(){
    console.log('This is ngDoCheck of child')
  }

  ngAfterContentInit(){
    console.log('This is ngAfterContentInit of child')
  }

  ngAfterContentChecked(){
    console.log('This is ngAfterContentChecked of child')
  }

  ngAfterViewInit(){
    console.log('This is ngAfterViewInit of child')
  }
  ngAfterViewChecked(){
    console.log('This is ngAfterViewChecked of child')
  }
  ngOnDestroy(){
    console.log('This is ngOnDestroy of child')
  }
}
