import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aptitud } from '../Model/aptitud';
import { Experiencia } from '../Model/experiencia';
import { Persona } from '../Model/persona';
import { Proyecto } from '../Model/proyecto';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {


  constructor(private http:HttpClient) { }

  obtenerdatos(): Observable<any> {
    return this.http.get<Persona[]>('http://localhost:8080/lista/personas');
  }

  obtenerdatosaptitud(): Observable<any> {
    return this.http.get<Aptitud[]>('http://localhost:8080/lista/aptitudes');
  }

  obtenerdatosproyecto(): Observable<any> {
    return this.http.get<Proyecto[]>('http://localhost:8080/lista/proyectos');
  }

  altaexperiencia(experiencia: Experiencia) {
    return this.http.post('http://localhost:8080/nuevo/experiencia_laboral', experiencia);
  } 

}
