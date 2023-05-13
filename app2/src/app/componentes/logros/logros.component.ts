import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Logro } from 'src/app/Model/logro';
import { AuthService } from 'src/app/servicios/auth.service';
import { LogroService } from 'src/app/servicios/logro.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public Logros: Logro[] = [];
  public actualizarLogro: Logro | undefined;
  public eliminarLogro: Logro | undefined;
  constructor(private datosPorfolio: LogroService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatoslogro().subscribe(data => {
      this.Logros = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio()
    console.log("esta iniciado en el componente logro?" + this.loginUser.estadoinicio());
  }

  public obtenerlogro(): void {
    this.datosPorfolio.obtenerdatoslogro().subscribe({
      next: (Response: Logro[]) => {
        this.Logros = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, logro?: Logro): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addLogroModal');
    }
    else if (mode === 'delete') {
      this.eliminarLogro = logro;
      button.setAttribute('data-target', '#deleteLogroModal');
    }
    else if (mode === 'edit') {
      this.actualizarLogro = logro;
      button.setAttribute('data-target', '#editLogroModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altalogro(addForm: NgForm) {
    document.getElementById('add-logro-form')?.click();
    this.datosPorfolio.altalogro(addForm.value).subscribe({
      next: (response: Logro) => {
        console.log(response);
        this.obtenerlogro();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizarlogro(logro: Logro) {
    this.actualizarLogro = logro;
    document.getElementById('update-logro-form')?.click();
    this.datosPorfolio.actualizarlogro(logro).subscribe({
      next: (response: Logro) => {
        console.log(response);
        this.obtenerlogro();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarlogro(id: any): void {
    this.datosPorfolio.eliminarlogro(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenerlogro();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
