import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';
import {Item} from '../../typings/item';

@Directive({
  selector: '[appAppPriceEvolution]'
})
export class AppPriceEvolutionDirective implements OnChanges {

  @Input() appAppPriceEvolution: Item | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appAppPriceEvolution']) {
      if (changes['appAppPriceEvolution'].currentValue.currentPrice > changes['appAppPriceEvolution'].currentValue.previousPrice) {
        this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-danger');
        this.renderer.addClass(this.el.nativeElement.children[0], 'bg-success');
      } else if (changes['appAppPriceEvolution'].currentValue.currentPrice < changes['appAppPriceEvolution'].currentValue.previousPrice) {
        this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-success');
        this.renderer.addClass(this.el.nativeElement.children[0], 'bg-danger');
      }
    }
  }
}
