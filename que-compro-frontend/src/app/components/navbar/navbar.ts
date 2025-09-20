import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { User } from 'firebase/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
   user$: Observable<User | null>;

  constructor(private auth: AuthService, private router: Router) {
    this.user$ = this.auth.currentUser$; // observable del usuario
  }

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
