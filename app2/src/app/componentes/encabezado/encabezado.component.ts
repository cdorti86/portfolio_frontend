import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import { PersonaService } from 'src/app/servicios/persona.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Persona } from 'src/app/Model/persona';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit { 
  usuarioLogueado: boolean = false;
  public Personas: Persona[] = [];
  public actualizarPersona: Persona | undefined;
  public eliminarPersona: Persona | undefined;
  constructor(private datosPorfolio: PersonaService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatospersona().subscribe(data => {
      this.Personas = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio()
    console.log("esta iniciado en el componente encabezado?" + this.loginUser.estadoinicio());
  }

  public obtenerpersona(): void {
    this.datosPorfolio.obtenerdatospersona().subscribe({
      next: (Response: Persona[]) => {
        this.Personas = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, persona?: Persona): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPersonaModal');
    }
    else if (mode === 'delete') {
      this.eliminarPersona = persona;
      button.setAttribute('data-target', '#deletePersonaModal');
    }
    else if (mode === 'edit') {
      this.actualizarPersona = persona;
      button.setAttribute('data-target', '#editPersonaModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altapersona(addForm: NgForm) {
    document.getElementById('add-educacion-form')?.click();
    this.datosPorfolio.altapersona(addForm.value).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.obtenerpersona();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizarpersona(persona: Persona) {
    this.actualizarPersona = persona;
    document.getElementById('update-persona-form')?.click();
    this.datosPorfolio.actualizarpersona(persona).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.obtenerpersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarpersona(id: any): void {
    this.datosPorfolio.eliminarpersona(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenerpersona();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}

