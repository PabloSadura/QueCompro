import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryService } from '../../services/history.service';
// ✅ Usamos la interfaz que representa un resultado guardado
import { HistoryEntry } from '../../interfaces/interfaces'; 
import { ResultsComponent } from '../results/results';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, ResultsComponent],
  templateUrl: './history.html',
  styleUrl: './history.scss'
})
export class HistoryComponent implements OnInit {
  // Las propiedades ahora usan el tipo correcto
  history: HistoryEntry[] = [];
  selectedHistoryItem: HistoryEntry | null = null;
  loading = true;
  error: string | null = null;

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
    this.historyService.getHistory().subscribe({
      // ✅ La data que llega del backend es un array de resultados guardados
      next: (data: HistoryEntry[]) => {
        this.history = data;
        
        // Mostrar el primer resultado del historial por defecto
        if (this.history.length > 0) {
          this.selectedHistoryItem = this.history[0];
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar historial:', err);
        this.error = "No se pudo cargar el historial. Intenta de nuevo más tarde.";
        this.loading = false;
      }
    });
  }

  // El parámetro de la función también usa el tipo correcto
  showHistoryDetails(item: HistoryEntry ): void {
    this.selectedHistoryItem = item;
  }
}