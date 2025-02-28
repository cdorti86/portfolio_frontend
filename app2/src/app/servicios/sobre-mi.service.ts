import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sobre_mi } from '../Model/sobre_mi';

@Injectable({
  providedIn: 'root'
})
export class SobreMiService {
  private apiBaseUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
 
  public obtenerdatossobre_mi(): Observable<any> {
    return this.http.get<Sobre_mi[]>(`${this.apiBaseUrl}/lista/sobre_mi`); 
}

public obtenerunasobre_mi(Id: number): Observable<Sobre_mi> {
  return this.http.get<Sobre_mi>(`${this.apiBaseUrl}/buscar/sobre_mi/${Id}`); 
}
public altasobre_mi(sobre_mi: Sobre_mi): Observable<Sobre_mi> {  
  return this.http.post<Sobre_mi>(`${this.apiBaseUrl}/nuevo/sobre_mi`, sobre_mi);
  } 

  public actualizarsobre_mi(sobre_mi: Sobre_mi):Observable <any> {
    return this.http.put(`${this.apiBaseUrl}/modificar/sobre_mi`, sobre_mi);
  }

  public eliminarsobre_mi(Id: number):Observable <void>{
    return this.http.delete<void>(`${this.apiBaseUrl}/delete/sobre_mi/${Id}`);
  }

}
