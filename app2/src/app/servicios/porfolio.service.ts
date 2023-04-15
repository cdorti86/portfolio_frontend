import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aptitud } from '../Model/Clases/aptitud';
import { Persona } from '../Model/Clases/persona';


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
}
