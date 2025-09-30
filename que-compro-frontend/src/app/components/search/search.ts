import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class SearchComponent {
  query = '';
  minPrice?: number;
  maxPrice?: number;

  // ⚡ Estos valores pueden setearse por geolocalización
  location = 'US';
  currency = 'USD';

  @Output() search = new EventEmitter<{ 
    query: string; 
    minPrice?: number; 
    maxPrice?: number; 
    location: string; 
    currency: string; 
  }>();

  onSubmit() {
    this.search.emit({
      query: this.query,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      location: this.location,
      currency: this.currency
    });
  }
}
