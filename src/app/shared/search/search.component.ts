import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchValue: string = '';

  @Output() search = new EventEmitter<string>();
  @Input() srchPlace: string | null = null;

  onSearchChange() {
    this.search.emit(this.searchValue);
  }
}
