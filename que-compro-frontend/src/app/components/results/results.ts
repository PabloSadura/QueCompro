import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchEvent, Product, HistoryEntry } from '../../interfaces/interfaces'; // Ajusta la ruta

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './results.html',
  styleUrls: ['./results.scss']
})
export class ResultsComponent {
  // Propiedades locales que usará el HTML
  productos: Product[] = [];
  recomendacionFinal: string = '';
  collectionId: string = '';

  @Input() loading: boolean = false;
  @Input() status: string = '';

  // Usamos un 'setter' para el Input.
  // Este código se ejecuta automáticamente cada vez que 'searchResult' cambia.
  @Input()
  set searchResult(value: SearchEvent | null) {
    if (value) {
      // Desestructuramos el objeto entrante en nuestras propiedades locales.
      this.productos = value.result.productos || [];
      this.collectionId = value.id || ''; // Guardamos el ID de la colección
    } else {
      // Si el valor es nulo (ej. antes de una búsqueda), reseteamos las propiedades.
      this.productos = [];
      this.recomendacionFinal = '';
      this.collectionId = '';
    }
  }
   @Input()
  set historyResult(value: HistoryEntry | null) {
    if (value) {
      // Desestructuramos el objeto entrante en nuestras propiedades locales.
      this.productos = value.result.productos || [];
      this.collectionId = value.id || ''; // Guardamos el ID de la colección
      this.recomendacionFinal = value.result.recomendacion_final || '';
    } else {
      // Si el valor es nulo (ej. antes de una búsqueda), reseteamos las propiedades.
      this.productos = [];
      this.recomendacionFinal = '';
      this.collectionId = '';
    }
  }
}