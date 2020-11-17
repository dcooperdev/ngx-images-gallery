import { Attribute, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[libImageAspect]'
})
export class ImageAspectDirective {
  @HostBinding('class') elementClass;

  constructor(private el: ElementRef, @Attribute('classToApply') public classToApply: string,) { }

  @HostListener('load') onLoad() {
    const width = this.el.nativeElement.offsetWidth;
    const height = this.el.nativeElement.offsetHeight;
    const portrait = width < height;

    if (portrait) {
      this.elementClass = this.classToApply;
    }
  }
}
