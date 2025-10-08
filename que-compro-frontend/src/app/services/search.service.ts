import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { SearchEvent } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private API_URL = 'http://localhost:5000/api/search'; // ⚡ ajustá si cambia tu backend

  constructor(
    private auth: AuthService,
    private ngZone: NgZone
  ) {}

  search(
    query: string,
    minPrice?: number,  
    maxPrice?: number,
    location?: string,
    currency?: string
  ): Observable<SearchEvent> {
    return new Observable<SearchEvent>(observer => {
      this.auth.getIdToken().then(token => {
        const url = new URL(`${this.API_URL}/stream`);
        url.searchParams.append('query', query);
        if (minPrice) url.searchParams.append('minPrice', minPrice.toString());
        if (maxPrice) url.searchParams.append('maxPrice', maxPrice.toString());
        if (location) url.searchParams.append('location', location);
        if (currency) url.searchParams.append('currency', currency);
        url.searchParams.append('token', token);


        const eventSource = new EventSource(url.toString(), { withCredentials: true });

        eventSource.onmessage = (event) => {
          this.ngZone.run(() => {
            try {
              const data: SearchEvent = JSON.parse(event.data);
              observer.next(data);
              
              // ✅ si llega un evento de "Completado", cerramos el stream
              if (data.status === 'Completado') {
                eventSource.close();
                observer.complete();
              }
            } catch (err) {
              observer.error(err);
              eventSource.close();
            }
          });
        };

        eventSource.onerror = (err) => {
          this.ngZone.run(() => {
            observer.error(err);
            eventSource.close();
          });
        };
      }).catch(err => observer.error(err));
    });
  }
}
