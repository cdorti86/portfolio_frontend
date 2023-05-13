import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Logro } from '../Model/logro';

@Injectable({
  providedIn: 'root'
})
export class LogroService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
 
  public obtenerdatoslogro(): Observable<any> {
    return this.http.get<Logro[]>(`${this.apiBaseUrl}/lista/logro`); 
}

public obtenerunlogro(Id: number): Observable<Logro> {
  return this.http.get<Logro>(`${this.apiBaseUrl}/buscar/logro/${Id}`); 
}
public altalogro(logro: Logro): Observable<Logro> { 
  return this.http.post<Logro>(`${this.apiBaseUrl}/nuevo/logro`, logro);
  } 

  public actualizarlogro(logro: Logro):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/logro`, logro);
  }

  public eliminarlogro(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/logro/${Id}`);
  }

}
