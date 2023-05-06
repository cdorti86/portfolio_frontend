import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../Model/user.interface';
import { Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuarioLogueado: boolean = false;
//  userData: any;
//  url= "";

// currentUserSubject: BehaviorSubject<any>;

  constructor(private authFire: AngularFireAuth,
    private router: Router,
     ) { 
// private http: HttpClient
      //      console.log("El servicio de autenticacion está corriendo");
//      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
    }

// IniciarSesion(credenciales:any):Observable<any> {return this.http.post(this.url, credenciales).pipe(map(data =>
//  {sessionStorage.setItem('currentUser', JSON.stringify(data));return data;}))};

async login(user: User) {
    const { email, password } = user
    try {
      return await this.authFire.signInWithEmailAndPassword(email, password).then(result => {
        console.log('Logueado correctamente', result)
        this.router.navigate(['/'])
      });
    } catch (error) {
      console.log("Hubo un error en el login: ", error)
      this.router.navigate(['/Login'])
      return null;
    }
  };

  logout() {
    this.authFire.signOut()
    console.log("se cerro sesion?" + this.estadoinicio());
    };

estadoinicio():boolean{
  this.authFire.authState.subscribe(user=>{ if (user) { this.usuarioLogueado  = true }
  else { this.usuarioLogueado = false} ;
    });
  return this.usuarioLogueado};
}
