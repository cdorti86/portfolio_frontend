import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sobre_mi } from 'src/app/Model/sobre_mi';
import { AcerdeDeService } from 'src/app/servicios/acerde-de.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  mostrarDiv : boolean = false;
  usuarioLogueado: boolean = false;
  public sobre_mi: Sobre_mi[] = [];
  public actualizarSobre_mi: Sobre_mi | undefined;
  public eliminarSobre_mi: Sobre_mi | undefined;
  constructor(private datosPorfolio: AcerdeDeService, private loginUser: AuthService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatossobre_mi().subscribe(data => {
      console.log(data);
      this.sobre_mi=data ;
     });
     this.usuarioLogueado = this.loginUser.estadoinicio()
    }
    public obteneraptitud(): void {
     this.datosPorfolio.obtenerdatossobre_mi().subscribe({
       next: (Response: Sobre_mi[]) => {
         this.sobre_mi = Response;
       },
       error: (error: HttpErrorResponse) => {
         alert(error.message);
       }
     })
}
  cambiar_parrafo (): void {
    this.mostrarDiv = true ;
  };


}
