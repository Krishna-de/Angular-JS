import { Component, OnInit, Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
 
})
export class FavoriteComponent {
  @Input('is-favorite') isFavorite: boolean;
  @Output('change') click = new EventEmitter();
  
   /*  private newFunction(): string {
        return 'app-favorite';
    } */

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.click.emit(this.isFavorite);
  }
}

export interface FavoriteChangedEventArgs {
    newValue: boolean
}
