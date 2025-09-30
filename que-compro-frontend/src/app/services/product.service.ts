import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { AuthService } from './auth.service'; // Asegúrate que la ruta sea correcta
import { Product } from '../interfaces/interfaces'; // Ajusta la ruta a tu interfaz

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);
  private auth = inject(AuthService); // Inyectamos el servicio de autenticación

  // URL base de tu API en el backend
  private apiUrl = 'http://localhost:5000/api'; // Reemplaza con la URL de tu backend

  /**
   * Obtiene un producto por su ID, incluyendo el token de autenticación en la llamada.
   */
  getProductById(idCollection: string, idProduct:string): Observable<Product> {
    return from(this.auth.getIdToken())
    .pipe(
      switchMap(token => {
        if (!token) {
          throw new Error('No authentication token found!');
        }
        const headers = new HttpHeaders({Authorization: `Bearer ${token}`
        });
        return this.http.get<Product>(`${this.apiUrl}/product/${idCollection}/${idProduct}`, { headers });
      })
    );
  }
}