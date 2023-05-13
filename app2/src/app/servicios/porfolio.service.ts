import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aptitud } from '../Model/aptitud';
import { Experiencia } from '../Model/experiencia';
import { Persona } from '../Model/persona';
import { Proyecto } from '../Model/proyecto';


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) {

  }
  obtenerdatos(): Observable<any> {
    return this.http.get<Persona[]>(`${this.apiBaseUrl}/lista/personas`);
  }

  obtenerdatosaptitud(): Observable<any> {
    return this.http.get<Aptitud[]>(`${this.apiBaseUrl}/lista/aptitudes`);
  }

  obtenerdatosproyecto(): Observable<any> {
    return this.http.get<Proyecto[]>(`${this.apiBaseUrl}/lista/proyectos`);
  }

  public obtenerdatosexperiencia(): Observable<any> {
    return this.http.get<Experiencia[]>(`${this.apiBaseUrl}/lista/experiencias_laborales`); 
}

  altaexperiencia(experiencia: Experiencia) {
    return this.http.post(`${this.apiBaseUrl}/nuevo/experiencia_laboral`, experiencia);
  } 

  }