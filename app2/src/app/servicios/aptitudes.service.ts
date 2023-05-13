import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Aptitud } from '../Model/aptitud';

@Injectable({
  providedIn: 'root'
})
export class AptitudesService {
private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public obtenerdatosaptitud(): Observable<any> {
    return this.http.get<Aptitud[]>(`${this.apiBaseUrl}/lista/aptitudes`); 
}

public obtenerunaaptitud(Id: number): Observable<Aptitud> {
  return this.http.get<Aptitud>(`${this.apiBaseUrl}/buscar/aptitud/${Id}`); 
}
public altaaptitud(experiencia: Aptitud): Observable<Aptitud> {
  return this.http.post<Aptitud>(`${this.apiBaseUrl}/nuevo/aptitud`, experiencia);
  } 

  public actualizaraptitud(experiencia: Aptitud):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/aptitud`, experiencia);
  }

  public eliminaraptitud(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/aptitud/${Id}`);
  }
}
