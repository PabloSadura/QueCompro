import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
})
export class SearchComponent {
  query: string = '';
  minPrice?: number;
  maxPrice?: number;

  @Output() searchTrigger = new EventEmitter<{ query: string; minPrice?: number; maxPrice?: number }>();

  onSearch() {  
      this.searchTrigger.emit({
      query: this.query,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    });
  }
}
