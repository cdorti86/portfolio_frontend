import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../Model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
 
  public obtenerdatosproyecto(): Observable<any> {
    return this.http.get<Proyecto[]>(`${this.apiBaseUrl}/lista/Proyecto`); 
}

public obtenerunaproyecto(Id: number): Observable<Proyecto> {
  return this.http.get<Proyecto>(`${this.apiBaseUrl}/buscar/Proyecto/${Id}`); 
}
public altaproyecto(proyecto: Proyecto): Observable<Proyecto> {
  console.log(proyecto)  
  return this.http.post<Proyecto>(`${this.apiBaseUrl}/nuevo/Proyecto`, proyecto);
  } 

  public actualizarproyecto(proyecto: Proyecto):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/Proyecto`, proyecto);
  }

  public eliminarproyecto(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/Proyecto/${Id}`);
  }
}
