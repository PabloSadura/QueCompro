import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent {
  email = '';
  password = '';
  error: string | null = null;
  loading = false;

  constructor(private auth: AuthService, private router: Router) {}

  async onSignup() {
    this.loading = true;
    this.error = null;

    try {
      await this.auth.signup(this.email, this.password);
      this.router.navigate(['/']); // redirige al home
    } catch (err: any) {
      this.error = err.message || 'Error al registrarse';
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
}
