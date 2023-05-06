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
    return this.http.get<Experiencia[]>('http://localhost:8080/lista/experiencias_laborales'); 
}

public obtenerunaexperiencia(): Observable<Experiencia> {
  return this.http.get<Experiencia>(`${this.apiBaseUrl}/buscar/experiencia_laboral/4`); 
}
public altaexperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>('http://localhost:8080/nuevo/experiencia_laboral', experiencia);
  } 

  public actualizarexperiencia(experiencia: Experiencia):Observable <any> {
    return this.http.put('http://localhost:8080/modificar/experiencia_laboral', experiencia);
  }

  public eliminarexperiencia(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/experiencia_laboral/${Id}`);
  }

}