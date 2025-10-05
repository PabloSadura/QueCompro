// src/app/services/auth.service.ts
import { Injectable, inject, signal, computed } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);

  currentUser = signal<User | null>(null);
  
  isLoggedIn = computed(() => !!this.currentUser());

  constructor() {
  
    onAuthStateChanged(this.auth, (user) => {
      this.currentUser.set(user);
    });
  }
  async getIdToken(): Promise<string> {
    const user = this.currentUser(); // Leemos el valor de la señal
    if (!user) throw new Error('No user logged in');
    return user.getIdToken();
  }

  async signup(email: string, password: string) {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }


  async login(email: string, password: string) {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    return credential.user;
  }

  /** Login con Google */
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    return credential.user;
  }

  /** Logout */
  async logout() {
    return signOut(this.auth);
  }
}