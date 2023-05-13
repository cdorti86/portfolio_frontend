import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../Model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
 
  public obtenerdatospersona(): Observable<any> {
    return this.http.get<Persona[]>(`${this.apiBaseUrl}/lista/personas`); 
}

public obtenerunapersona(Id: number): Observable<Persona> {
  return this.http.get<Persona>(`${this.apiBaseUrl}/buscar/persona/${Id}`); 
}
public altapersona(persona: Persona): Observable<Persona> {
  console.log(persona)  
  return this.http.post<Persona>(`${this.apiBaseUrl}/nuevo/persona`, persona);
  } 

  public actualizarpersona(persona: Persona):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/persona`, persona);
  }

  public eliminarpersona(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/persona/${Id}`);
  }

}
