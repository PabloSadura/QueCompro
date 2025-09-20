import { Injectable } from '@angular/core';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  
  currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private auth: Auth) {
    // Escuchar cambios de estado de Firebase

    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
      
      // Guardar en localStorage para persistencia
      if (user) localStorage.setItem('currentUser', JSON.stringify({ uid: user.uid, email: user.email }));
      else localStorage.removeItem('currentUser');
    });

    // Recuperar usuario de localStorage al inicializar
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const userObj = JSON.parse(savedUser);
      // Creamos un objeto simulado User solo con uid y email
      this.currentUserSubject.next({ uid: userObj.uid, email: userObj.email } as User);
    }
  }

  /** Devuelve el usuario actual */
  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  /** Devuelve el token de Firebase del usuario actual */
  async getIdToken(): Promise<string> {
    const user = this.getCurrentUser();
    if (!user) throw new Error('No user logged in');
    return user.getIdToken?.() || Promise.resolve(''); // el ? evita errores si es objeto simulado
  }

  /** Registro con email y contraseña */
  async signup(email: string, password: string) {
    const credential = await createUserWithEmailAndPassword(this.auth, email, password);
    this.currentUserSubject.next(credential.user);
    return credential.user;
  }

  /** Login con email y contraseña */
  async login(email: string, password: string) {
    const credential = await signInWithEmailAndPassword(this.auth, email, password);
    this.currentUserSubject.next(credential.user);
    return credential.user;
  }

  /** Login con Google */
  async loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    this.currentUserSubject.next(credential.user);
    return credential.user;
  }

  /** Logout */
  async logout() {
    await signOut(this.auth);
    this.currentUserSubject.next(null);
    localStorage.removeItem('currentUser');
  }
}
