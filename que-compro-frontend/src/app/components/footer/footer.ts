import { Component,inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  private authService = inject(AuthService); // <-- Inyectar

  // Exponemos la señal de isLoggedIn a la plantilla
  isLoggedIn = this.authService.isLoggedIn;
 currentYear = new Date().getFullYear();

  constructor() { }
}
