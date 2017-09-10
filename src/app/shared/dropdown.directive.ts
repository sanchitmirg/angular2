import { Directive, HostListener, Renderer2, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: Boolean = false;
  constructor(private renderer:Renderer2,
              elementRef: ElementRef) { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
