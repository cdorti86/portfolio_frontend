import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../Model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public obtenerdatoseducacion(): Observable<any> {
    return this.http.get<Educacion[]>(`${this.apiBaseUrl}/lista/educaciones`); 
}

public obtenerunaeducacion(Id: number): Observable<Educacion> {
  return this.http.get<Educacion>(`${this.apiBaseUrl}/buscar/educacion/${Id}`); 
}
public altaeducacion(educacion: Educacion): Observable<Educacion> {
  console.log(educacion)  
  return this.http.post<Educacion>(`${this.apiBaseUrl}/nuevo/educacion`, educacion);
  } 

  public actualizareducacion(educacion: Educacion):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/educacion`, educacion);
  }

  public eliminareducacion(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/educacion/${Id}`);
  }
}
