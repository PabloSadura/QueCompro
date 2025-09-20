import { Component, NgZone, OnInit  } from '@angular/core';
import { SearchComponent } from '../search/search';
import { ResultsComponent } from '../results/results';
import { Product } from '../../services/search.service';
import { SearchService } from '../../services/search.service';
import { AuthService } from '../../services/auth.service';

interface SearchEvent {
  status: string;
  result?: Product[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ResultsComponent],
  templateUrl: './home.html'
})
export class HomeComponent {
  demoResults: Product[] = [];
  results: Product[] = [];
  loading = false;
  status = '';
  isLoggedIn = false;

  constructor(private searchService: SearchService, private auth: AuthService, private ngZone: NgZone) {}


  ngOnInit(){
    this.loadDemo();
    this.auth.currentUser$.subscribe(user => {
      this.isLoggedIn = !!user;
      if (!this.isLoggedIn) {
        this.loadDemo();
      } else {
        this.results = []; // limpiar resultados si el usuario inicia sesión
      }
    });
  }
    loadDemo() {
      this.demoResults = [
        { marca: 'Demo', modelo: 'Notebook X', pros: ['Ligero', 'Rápido'], contras: ['Precio alto'], caracteristicas: ['16GB RAM', '512GB SSD'], precio: 1500, calificacion: 4, recomendacion: 'Excelente para tareas generales',imagen:'',link:"" },
        { marca: 'Demo', modelo: 'Laptop Y', pros: ['Económica'], contras: ['Batería limitada'], caracteristicas: ['8GB RAM', '256GB SSD'], precio: 700, calificacion: 3, recomendacion: 'Buena opción para estudiantes',imagen:'',link:"" },
        { marca: 'Demo', modelo: 'Ultrabook Z', pros: ['Compacto', 'Duradero'], contras: ['Poca conectividad'], caracteristicas: ['16GB RAM', '1TB SSD'], precio: 1800, calificacion: 5, recomendacion: 'Ideal para profesionales',imagen:'',link:"" }
      ];
    }

  handleSearch({ query, minPrice, maxPrice }: { query: string; minPrice?: number; maxPrice?: number }) {

      if (!this.isLoggedIn) {
      // Redirigir a login si no está autenticado
      window.location.href = '/login';
      return;
    }

    this.loading = true;
    this.status = 'Iniciando búsqueda...';
    this.results = [];

    this.searchService.search(query, minPrice, maxPrice ).subscribe({
      next: (event: SearchEvent) => {
        this.ngZone.run(() => {
          this.status = event.status;
          if (event.result) this.results = event.result
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          console.error(err)
          this.status = 'Error en búsqueda';
          this.loading = false;
        })
      },      
      complete: () => {
        this.ngZone.run(() => {
          this.status = 'Búsqueda finalizada';
          this.loading = false;
        });
      }
    });
  }
}
