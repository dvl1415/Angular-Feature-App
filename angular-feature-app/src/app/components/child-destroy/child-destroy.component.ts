import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-destroy',
  template: `<h2>Child Component</h2>`,
  styleUrls: ['./child-destroy.component.css']
})
export class ChildDestroyComponent implements OnInit {

  constructor() { console.log('constructor of child')}

  ngOnInit() { console.log('ngOnInit of child')}
  ngOnDestroy(){console.log('ngOnDestroy of child')}
}
