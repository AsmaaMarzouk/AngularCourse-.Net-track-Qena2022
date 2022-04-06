import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

// class decorator
@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges {
// private elem:ElementRef
// defaultColor:string ="yellow";
// property decorator
@Input() defaultColor:string ="yellow";
@Input('LightBox') hoverColor:string ="red";

  constructor(private elem:ElementRef) { 
  // this.elem = _elem; 
    // nativeElement => dom of element
    
    // elem.nativeElement.style.border="2px solid blue";
    // elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
    // elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
  }
  
  ngOnChanges(): void {
    this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
   
  }
// method decorator @HostListener('event')
  // events
@HostListener('mouseenter') onMouseEnterFunc(){
  // this.elem.nativeElement.style.border="2px solid red";
  this.elem.nativeElement.style.border=`2px solid ${this.hoverColor}`;
}
@HostListener('mouseout') onMouseOutFunc(){
  // this.elem.nativeElement.style.border="2px solid green";
  this.elem.nativeElement.style.border=`2px solid ${this.defaultColor}`;
}
}
