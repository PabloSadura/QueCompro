// src/app/pages/history/history.ts
import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryService } from '../../services/history.service';
import { HistoryEntry } from '../../interfaces/interfaces';
import { ResultsComponent } from '../results/results';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, ResultsComponent],
  templateUrl: './history.html'
})
export class HistoryComponent implements OnInit {
  private historyService = inject(HistoryService);

  // Usamos Señales para todo el estado del componente
  history = signal<HistoryEntry[]>([]);
  selectedHistoryItem = signal<HistoryEntry | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.historyService.getHistory()
      .pipe(
        // Finalize se ejecuta siempre, al completar o al dar error
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (data: HistoryEntry[]) => {
          this.history.set(data);
          // Si hay historial, seleccionamos el primer item por defecto
          if (data.length > 0) {
            this.selectedHistoryItem.set(data[0]);
          }
        },
        error: (err) => {
          console.error('Error al cargar historial:', err);
          this.error.set("No se pudo cargar el historial. Intenta de nuevo más tarde.");
        }
      });
  }

  // El método para seleccionar un item ahora simplemente actualiza la señal
  showHistoryDetails(item: HistoryEntry): void {
    this.selectedHistoryItem.set(item);
  }
}