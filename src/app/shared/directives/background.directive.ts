import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[background]'
})
export class BackgroundDirective {

  constructor(private element: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = "white";
  }

  @HostBinding("style.background-color") get getBackground() {
    return "yellow";
  }

}
