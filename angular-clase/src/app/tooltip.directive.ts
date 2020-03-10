import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  @Input('appToolTip') text: string;
  private tooltipEl;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    let myElem = this.el.nativeElement;
    this.tooltipEl = document.createElement('span');
    let icon = myElem.querySelector('i');
    this.tooltipEl.textContent = this.text;
    this.tooltipEl.style.position = 'relative';
    this.tooltipEl.className = 'tooltip';
    myElem.appendChild(this.tooltipEl);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.querySelector('span').remove();
  }

}
