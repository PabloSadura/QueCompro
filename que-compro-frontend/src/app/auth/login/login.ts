import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  email = '';
  password = '';
  error: string | null = null;
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onLogin() {
    this.loading = true;
    this.error = null;
    try {
      await this.auth.login(this.email, this.password);
      this.router.navigate(['/']); // redirige al home
    } catch (err: any) {
      this.error = err.message || 'Error en el login';
    } finally {
      this.loading = false;
    }
  }
  async onGoogleLogin() {
  this.loading = true;
  this.error = null;
  try {
    await this.auth.loginWithGoogle();
    this.router.navigate(['/']);
  } catch (err: any) {
    this.error = err.message || 'Error al iniciar sesión con Google';
  } finally {
    this.loading = false;
  }
}
 async signup() {
    try {
      await this.auth.loginWithGoogle(); // puede ser mismo flujo que login
      this.router.navigate(['/']);
    } catch (err) {
      console.error('Error signup:', err);
    }}
}
