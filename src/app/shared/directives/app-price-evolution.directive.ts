import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {Item} from '../../typings/item';

@Directive({
  selector: '[appAppPriceEvolution]'
})
export class AppPriceEvolutionDirective {

  private _item!: Item;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  get appAppPriceEvolution(): Item {
    return this._item;
  }

  // TODO: Use Angular Animation?
  @Input()
  set appAppPriceEvolution(item: Item) {

    if (item.currentPrice > item.previousPrice) {

      this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-danger');
      this.renderer.addClass(this.el.nativeElement.children[0], 'bg-success');

      setTimeout(() => {
          this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-success');
        },
        500);

    } else if (item.currentPrice < item.previousPrice) {

      this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-success');
      this.renderer.addClass(this.el.nativeElement.children[0], 'bg-danger');

      setTimeout(() => {
          this.renderer.removeClass(this.el.nativeElement.children[0], 'bg-danger');
        },
        500);
    }
  }
}
