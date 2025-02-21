import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Movie | null = null;
  @Input() url: string | null = null;

  imagesSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}

  getRatingOffset(): string {
    if (!this.itemData || this.itemData.vote_average == null) {
      return '100'; // Default full circle
    }
    let percentage = (this.itemData.vote_average / 10) * 100; // Convert to percentage
    return `${100 - percentage}`;
  }
}
