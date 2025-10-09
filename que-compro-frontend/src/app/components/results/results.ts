// src/app/components/results/results.ts
import { Component, Input, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchEvent, Product, HistoryEntry } from '../../interfaces/interfaces';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './results.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent {
  // Propiedades locales que usará el HTML
  productos = signal<Product[]>([]);
  recomendacionFinal = signal('');
  collectionId = signal('');

  // Señales para controlar el nuevo modal
  isModalOpen = signal(false);
  selectedProductForModal = signal<Product | null>(null);

  @Input() loading: boolean = false;
  @Input() status: string = '';

  // Usamos un setter para ambos inputs que llama a una función privada
  @Input() set searchResult(value: SearchEvent | null) {
    this.processInput(value);
  }
  @Input() set historyResult(value: HistoryEntry | null) {
    this.processInput(value);
  }

  private processInput(value: SearchEvent | HistoryEntry | null): void {
    if (value && value.result) {
      this.productos.set(value.result.productos || []);
      this.collectionId.set(value.id || '');
      this.recomendacionFinal.set(value.result.recomendacion_final || '');
    } else {
      this.productos.set([]);
      this.collectionId.set('');
      this.recomendacionFinal.set('');
    }
  }

  // Métodos para el nuevo modal
  openProsConsModal(product: Product): void {
    this.selectedProductForModal.set(product);
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }
}