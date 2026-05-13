import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[effects]'
})
export class EffectsDirective implements OnInit{

  @Input() defaultBgColor: string = '';
  @Input() hoverBgColor: string = '';

  constructor() { }

  ngOnInit(): void {
    this.background = this.defaultBgColor;
  }

  @HostBinding('style.background')
  background!: string;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.background = this.hoverBgColor;
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.background = this.defaultBgColor;
  }
}
