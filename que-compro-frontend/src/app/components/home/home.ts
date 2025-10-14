// src/app/pages/home/home.ts
import { Component, inject, signal, OnInit, ChangeDetectionStrategy } from '@angular/core';import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../../components/search/search';
import { ProductCardsComponent } from '../../components/product-card/product-card.component';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';
import { SearchEvent } from '../../interfaces/interfaces';
import { DEMO_DATA } from '../../data/demo.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, ProductCardsComponent],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  private searchService = inject(SearchService);
  private auth = inject(AuthService);

  // Señales para manejar el estado
  searchResult = signal<SearchEvent | null>(null);
  loading = signal(false);
  status = signal('');
  isLoggedIn = this.auth.isLoggedIn;
  demoResult: SearchEvent | null = null;

  ngOnInit() {
    this.demoResult = DEMO_DATA;
  }

  handleSearch(event: { query: string; minPrice?: number; maxPrice?: number; currency: string }) {
    if (!this.isLoggedIn()) {
      window.location.href = '/login';
      return;
    }

    this.loading.set(true);
    this.status.set('Iniciando búsqueda...');
    this.searchResult.set(null); // Reinicia el resultado

    this.searchService.search(event.query, event.minPrice, event.maxPrice, event.currency).subscribe({
      next: (streamEvent) => {
        this.status.set(streamEvent.status);
       console.log(streamEvent);
       
        
          if (streamEvent.result) {
          this.searchResult.set(streamEvent);
        }
        
        if (streamEvent.status === 'Completado' || streamEvent.status.startsWith('Error')) {
          this.loading.set(false);
        }
      },
      error: (err) => {
        console.error('Error en búsqueda:', err);
        this.status.set('Error al realizar la búsqueda.');
        this.loading.set(false);
      },
      complete: () => {
        this.loading.set(false);
      }
    });
  }
}