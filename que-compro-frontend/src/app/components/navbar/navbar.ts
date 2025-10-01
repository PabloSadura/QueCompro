import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { User } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedDataService } from '../../services/shared-data.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, CommonModule, RouterLink, MaterialModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit{
   user$: Observable<User | null>;
  selectedCurrency: string = 'ARS';
  
  constructor(private auth: AuthService, private router: Router, private sharedDataService: SharedDataService) {
    this.user$ = this.auth.currentUser$; // observable del usuario
  }

ngOnInit() {
    this.selectedCurrency = this.sharedDataService.getCurrency();
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.sharedDataService.setCurrency(currency);
  }


  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
