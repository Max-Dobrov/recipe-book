import {Directive, ElementRef, HostBinding, HostListener} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
// add a class "open" to host element
export class appDropdown {
  @HostBinding('class.open') isDropdownActive = false

  @HostListener('click') atClick () {
    this.isDropdownActive = !this.isDropdownActive
  }
  constructor(private elementRef: ElementRef) {
  }
}
