import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../Model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
 
  public obtenerdatosexperiencia(): Observable<any> {
    return this.http.get<Experiencia[]>(`${this.apiBaseUrl}/lista/experiencias_laborales`); 
}

public obtenerunaexperiencia(Id: number): Observable<Experiencia> {
  return this.http.get<Experiencia>(`${this.apiBaseUrl}/buscar/experiencia_laboral/${Id}`); 
}
public altaexperiencia(experiencia: Experiencia): Observable<Experiencia> {
  console.log(experiencia)  
  return this.http.post<Experiencia>(`${this.apiBaseUrl}/nuevo/experiencia_laboral`, experiencia);
  } 

  public actualizarexperiencia(experiencia: Experiencia):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/experiencia_laboral`, experiencia);
  }

  public eliminarexperiencia(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/experiencia_laboral/${Id}`);
  }

}