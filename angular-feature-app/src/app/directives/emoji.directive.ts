import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appEmoji]'
})
export class EmojiDirective {

  @Input('appEmoji') emoji?:string = ''

  constructor( private el:ElementRef) { 

  }

  ngOnInit(){
    this.el.nativeElement.style.color = 'blue'
    this.el.nativeElement.textContent +=  ' ' + this.emoji
  }
}
