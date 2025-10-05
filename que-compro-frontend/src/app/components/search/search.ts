// src/app/components/search/search.ts
import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.html',
})
export class SearchComponent {
  // Usamos Señales (signals) para el estado del formulario
  query = signal('');
  minPrice = signal<number | undefined>(undefined);
  maxPrice = signal<number | undefined>(undefined);
  
  // Lógica para el dropdown de moneda, ahora dentro de este componente
  isCurrencyDropdownOpen = signal(false);
  selectedCurrency = signal('ARS'); // Moneda por defecto

  @Output() search = new EventEmitter<{
    query: string;
    minPrice?: number;
    maxPrice?: number;
    currency: string;
  }>();

  selectCurrency(currency: string) {
    this.selectedCurrency.set(currency);
    this.isCurrencyDropdownOpen.set(false); // Cierra el dropdown al seleccionar
  }

  onSubmit() {
    // Emitimos los valores actuales de las señales
    this.search.emit({
      query: this.query(),
      minPrice: this.minPrice(),
      maxPrice: this.maxPrice(),
      currency: this.selectedCurrency()
    });
  }
}