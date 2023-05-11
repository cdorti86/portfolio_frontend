import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../Model/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogueado: boolean = false;

  constructor(private authFire: AngularFireAuth,
    private router: Router,
  ) {
    this.authFire.authState.subscribe(user => {
      if (user) { this.usuarioLogueado = true }
      else { this.usuarioLogueado = false };
    });
  }

  async login(user: User) {
    const { email, password } = user
    try {
      return await this.authFire.signInWithEmailAndPassword(email, password).then(result => {
        console.log('Logueado correctamente', result)
        this.usuarioLogueado = true;
        this.router.navigate(['/'])
      });
    } catch (error) {
      console.log("Hubo un error en el login: ", error)
      this.router.navigate(['/Login'])
      return null;
    }
  };

  estadoinicio() {
    return this.usuarioLogueado
  };

  logout() {
    return this.authFire.signOut()
  };
}
