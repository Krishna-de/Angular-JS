import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input() isSelected: boolean;
  @Input() likesCount: number;
   
  onSelect() {
    this.likesCount += (this.isSelected) ? -1: 1;
    this.isSelected = !this.isSelected;
  }

}
