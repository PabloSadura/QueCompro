import { Component, NgZone, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SearchComponent } from '../search/search'; // Asegúrate de que las rutas sean correctas
import { ResultsComponent } from '../results/results';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';
import { SearchEvent} from '../../interfaces/interfaces'; // Usa una interfaz para el resultado
import { SharedDataService } from '../../services/shared-data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent, ResultsComponent],
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  // Un único objeto para almacenar todo el resultado de la búsqueda
  searchResult: SearchEvent | null = null;
  loading = false;
  status = '';
  isLoggedIn = false;
  selectedCurrency: string = 'ARS';

  constructor(
    private searchService: SearchService, 
    private auth: AuthService, 
    private ngZone: NgZone,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.auth.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
    });
    this.sharedDataService.currentCurrency.subscribe(currency => {
      this.selectedCurrency = currency;
    });
  }

  handleSearch({ query, minPrice, maxPrice, location }: { query: string; minPrice?: number; maxPrice?: number; location: string}) {
    if (!this.isLoggedIn) {
      window.location.href = '/login';
      return;
    }

    this.loading = true;
    this.status = 'Iniciando búsqueda...';
    // Reiniciamos el objeto de resultado completo
    this.searchResult = null;

    this.searchService.search(query, minPrice, maxPrice, location, this.selectedCurrency).subscribe({
      next: (event) => {
        this.ngZone.run(() => {
          this.status = event.status;
          
          // Si es la primera vez que recibimos un resultado, creamos el objeto base
          if (event.result && !this.searchResult) {
            this.searchResult = {
              id: event.id || '', // <-- Aquí guardamos el ID de la colección
              query: query,
              result: event.result,
              createdAt: event.createdAt,
              status: event.status
            };
          }
          
          // Actualizamos el objeto con los datos que van llegando
          if (this.searchResult) {
            if (event.result) {
              this.searchResult.result = event.result;
            }  
          }     
          if (event.status.trim() === 'Completado' || event.status.startsWith('Error')) {
            this.loading = false;
          }
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          console.error('Error en búsqueda:', err);
          this.status = 'Error al realizar la búsqueda.';
          this.loading = false;
        });
      },
      complete: () => {
        this.ngZone.run(() => {
          this.loading = false;
        });
      }
    });
  }
}