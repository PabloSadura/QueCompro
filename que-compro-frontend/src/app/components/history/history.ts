// src/app/pages/history/history.ts
import { Component, inject, signal, computed, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HistoryService } from '../../services/history.service';
import { HistoryEntry } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './history.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent implements OnInit {
  private historyService = inject(HistoryService);

  // ✅ CORRECCIÓN: La señal 'history' ahora es accesible desde la plantilla.
  history = signal<HistoryEntry[]>([]);
  selectedHistoryItem = signal<HistoryEntry | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  searchTerm = signal('');
  visibleItemsCount = signal(5);

  filteredHistory = computed(() => {
    const term = this.searchTerm().toLowerCase();
    if (!term) return this.history();
    return this.history().filter(item => item.query.toLowerCase().includes(term));
  });

  visibleHistory = computed(() => {
    return this.filteredHistory().slice(0, this.visibleItemsCount());
  });

  ngOnInit() {
    this.historyService.getHistory()
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (data) => {
          this.history.set(data);
          if (data.length > 0) {
            this.selectedHistoryItem.set(data[0]);
          }
        },
        error: (err) => {
          this.error.set("No se pudo cargar el historial.");
          console.error(err);
        }
      });
  }

  showHistoryDetails(item: HistoryEntry): void {
    this.selectedHistoryItem.set(item);
  }

  showMore(): void {
    this.visibleItemsCount.update(count => count + 5);
  }
}