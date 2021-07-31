import { Component, DoCheck, Input, OnChanges, OnInit, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements 
OnInit, 
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked, 
AfterViewInit,
AfterViewChecked,
OnDestroy{

  title: string = "Life Cycle Hook Test"
  @Input() city : string = 'Kitchener'
  constructor(private http: HttpClient) { 
    console.log('This is Constructor of Parent')
  }

  ngOnChanges(){
    console.log('This is OnChanges Hook of Parent')
  }

  ngOnInit() {
    console.log('This is NgOnInit of Parent')
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((data) => {
      console.log(data)
    })
  }

  ngDoCheck(){
    console.log('This is ngDoCheck of Parent')
  }

  ngAfterContentInit(){
    console.log('This is ngAfterContentInit of Parent')
  }

  ngAfterContentChecked(){
    console.log('This is ngAfterContentChecked of Parent')
  }

  ngAfterViewInit(){
    console.log('This is ngAfterViewInit of Parent')
  }
  ngAfterViewChecked(){
    console.log('This is ngAfterViewChecked of Parent')
  }
  ngOnDestroy(){
    console.log('This is ngOnDestroy of Parent')
  }
}