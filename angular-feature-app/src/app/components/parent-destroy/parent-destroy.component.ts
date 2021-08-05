import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-destroy',
  templateUrl: './parent-destroy.component.html',
  styleUrls: ['./parent-destroy.component.css']
})
export class ParentDestroyComponent implements OnInit {

  displayChild = true;
  constructor() { console.log('constructor of Parent')}

  ngOnInit() { console.log('ngOnInit of Parent')}
  ngOnDestroy(){console.log('ngOnDestroy of Parent')}

  toggle(){
    this.displayChild = !this.displayChild
  }
}
