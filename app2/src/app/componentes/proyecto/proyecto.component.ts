import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { Proyecto } from 'src/app/Model/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public Proyectos: Proyecto[] = [];
  public actualizarProyecto: Proyecto | undefined;
  public eliminarProyecto: Proyecto | undefined;
  constructor(private datosPorfolio: ProyectoService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatosproyecto().subscribe(data => {
      this.Proyectos = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio();
  }

  public obtenerproyecto(): void {
    this.datosPorfolio.obtenerdatosproyecto().subscribe({
      next: (Response: Proyecto[]) => {
        this.Proyectos = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, proyecto?: Proyecto): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProyectoModal');
    }
    else if (mode === 'delete') {
      this.eliminarProyecto = proyecto;
      button.setAttribute('data-target', '#deleteproyectoModal');
    }
    else if (mode === 'edit') {
      this.actualizarProyecto = proyecto;
      button.setAttribute('data-target', '#editProyectoModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altaproyecto(addForm: NgForm) {
    document.getElementById('add-proyecto-form')?.click();
    this.datosPorfolio.altaproyecto(addForm.value).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.obtenerproyecto();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizarproyecto(proyecto: Proyecto) {
    this.actualizarProyecto = proyecto;
    document.getElementById('update-proyecto-form')?.click();
    this.datosPorfolio.actualizarproyecto(proyecto).subscribe({
      next: (response: Proyecto) => {
        console.log(response);
        this.obtenerproyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarproyecto(id: any): void {
    this.datosPorfolio.eliminarproyecto(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenerproyecto();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

 }
