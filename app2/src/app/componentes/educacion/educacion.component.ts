import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/Model/educacion';
import { AuthService } from 'src/app/servicios/auth.service';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public Educaciones: Educacion[] = [];
  public actualizarEducacion: Educacion | undefined;
  public eliminarEducacion: Educacion | undefined;
  constructor(private datosPorfolio: EducacionService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatoseducacion().subscribe(data => {
      this.Educaciones = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio();
  }

  public obtenereducacion(): void {
    this.datosPorfolio.obtenerdatoseducacion().subscribe({
      next: (Response: Educacion[]) => {
        this.Educaciones = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, educacion?: Educacion): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEducacionModal');
    }
    else if (mode === 'delete') {
      this.eliminarEducacion = educacion;
      button.setAttribute('data-target', '#deleteEducacionModal');
    }
    else if (mode === 'edit') {
      this.actualizarEducacion = educacion;
      button.setAttribute('data-target', '#editEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altaeducacion(addForm: NgForm) {
    document.getElementById('add-educacion-form')?.click();
    this.datosPorfolio.altaeducacion(addForm.value).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.obtenereducacion();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizareducacion(educacion: Educacion) {
    this.actualizarEducacion = educacion;
    document.getElementById('update-educacion-form')?.click();
    this.datosPorfolio.actualizareducacion(educacion).subscribe({
      next: (response: Educacion) => {
        console.log(response);
        this.obtenereducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminareducacion(id: any): void {
    this.datosPorfolio.eliminareducacion(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenereducacion();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }


}
