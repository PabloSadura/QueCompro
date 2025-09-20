import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Product {
  marca: string;
  modelo: string;
  pros: string[];
  contras: string[];
  caracteristicas: string[];
  precio: number;
  calificacion: number;
  recomendacion: string;
  link: string;
  imagen: string;
}

export interface SearchEvent {
 status: string;
  result?: Product[];
  analisis?: any[];
  error?: string;
}

@Injectable({ providedIn: 'root' })
export class SearchService {
  private baseUrl = 'http://localhost:5000/api/search';

  constructor(private auth:AuthService) {}

search(query: string, minPrice?: number, maxPrice?: number): Observable<SearchEvent> {
  return new Observable(observer => {
    this.auth.getIdToken().then(token => {
      let url = `${this.baseUrl}/stream?query=${encodeURIComponent(query)}&token=${token}`;

      if (minPrice !== undefined) {
        url += `&minPrice=${minPrice}`;
      }
      if (maxPrice !== undefined) {
        url += `&maxPrice=${maxPrice}`;
      }

      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        const data: SearchEvent = JSON.parse(event.data);
        observer.next(data);

        if (data.status === 'Completado' || data.status === 'Error en búsqueda') {
          observer.complete();
          eventSource.close();
        }
      };

      eventSource.onerror = (err) => {
        observer.error(err);
        eventSource.close();
      };
    }).catch(err => observer.error(err));
  });
}



}
