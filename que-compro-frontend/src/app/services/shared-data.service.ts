// src/app/services/shared-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private currencySource = new BehaviorSubject<string>('ARS');
  currentCurrency = this.currencySource.asObservable();

  constructor() { }

  setCurrency(currency: string) {
    this.currencySource.next(currency);
  }

  getCurrency(): string {
    return this.currencySource.getValue();
  }
}