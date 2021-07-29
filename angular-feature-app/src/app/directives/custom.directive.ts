import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private eleref : ElementRef) { 
    console.log(this.eleref.nativeElement)
    this.eleref.nativeElement.style.color = 'white'
    this.eleref.nativeElement.style.backgroundColor = 'crimson'
  }

}
