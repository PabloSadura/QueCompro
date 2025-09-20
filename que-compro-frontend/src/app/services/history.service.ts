import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, from, switchMap } from 'rxjs';

export interface SearchHistoryItem {
  query: string;
  result: any[];
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = 'http://localhost:5000/api/history';

  constructor(private http: HttpClient, private auth: AuthService) {}

  getHistory(): Observable<SearchHistoryItem[]> {
    return from(this.auth.getIdToken()).pipe(
      switchMap(token => {
        const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
        return this.http.get<SearchHistoryItem[]>(this.baseUrl, { headers });
      })
    );
  }
}
