// src/app/components/navbar/navbar.ts
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent {
  private authService = inject(AuthService);
  private sharedDataService = inject(SharedDataService);
  private router = inject(Router);

  // Señales para manejar el estado de la UI
  isMenuOpen = signal(false);
  isCurrencyDropdownOpen = signal(false);
  
  // ✅ CAMBIO: Simplemente referenciamos las señales que ya existen en el AuthService.
  // No es necesario usar toSignal aquí.
  isLoggedIn = this.authService.isLoggedIn;
  user = this.authService.currentUser;
  
  selectedCurrency = signal(this.sharedDataService.getCurrency());

  selectCurrency(currency: string) {
    this.selectedCurrency.set(currency);
    this.sharedDataService.setCurrency(currency);
    this.isCurrencyDropdownOpen.set(false);
    this.isMenuOpen.set(false);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}