import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/Model/experiencia';
import { AuthService } from 'src/app/servicios/auth.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public Experiencias: Experiencia[] = [];
  public actualizarExperiencia: Experiencia | undefined;
  public eliminarExperiencia: Experiencia | undefined;
  constructor(private datosPorfolio: ExperienciaService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatosexperiencia().subscribe(data => {
      this.Experiencias = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio();
  }

  public obtenerexperiencia(): void {
    this.datosPorfolio.obtenerdatosexperiencia().subscribe({
      next: (Response: Experiencia[]) => {
        this.Experiencias = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, experiencia?: Experiencia): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addExperienciaModal');
    }
    else if (mode === 'delete') {
      this.eliminarExperiencia = experiencia;
      button.setAttribute('data-target', '#deleteExperienciaModal');
    }
    else if (mode === 'edit') {
      this.actualizarExperiencia = experiencia;
      button.setAttribute('data-target', '#editExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altaexperiencia(addForm: NgForm) {
    document.getElementById('add-experiencia-form')?.click();
    this.datosPorfolio.altaexperiencia(addForm.value).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.obtenerexperiencia();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizaexperiencia(experiencia: Experiencia) {
    this.actualizarExperiencia = experiencia;
    document.getElementById('update-experiencia-form')?.click();
    this.datosPorfolio.actualizarexperiencia(experiencia).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.obtenerexperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarexperiencia(id: any): void {
    this.datosPorfolio.eliminarexperiencia(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenerexperiencia();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}