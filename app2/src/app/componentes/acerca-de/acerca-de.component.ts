import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sobre_mi } from 'src/app/Model/sobre_mi';
import { AuthService } from 'src/app/servicios/auth.service';
import { SobreMiService } from 'src/app/servicios/sobre-mi.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public Sobre_mis: Sobre_mi[] = [];
  public actualizarSobre_mi: Sobre_mi | undefined;
  public eliminarSobre_mi: Sobre_mi | undefined;
  constructor(private datosPorfolio: SobreMiService, private loginUser: AuthService) 
  { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerdatossobre_mi().subscribe(data => {
      this.Sobre_mis = data;
    });
  this.usuarioLogueado = this.loginUser.estadoinicio();
  }

  public obtenersobre_mi(): void {
    this.datosPorfolio.obtenerdatossobre_mi().subscribe({
      next: (Response: Sobre_mi[]) => {
        this.Sobre_mis = Response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode: String, sobre_mi?: Sobre_mi): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSobre_miModal');
    }
    else if (mode === 'delete') {
      this.eliminarSobre_mi = sobre_mi;
      button.setAttribute('data-target', '#deleteSobre_miModal');
    }
    else if (mode === 'edit') {
      this.actualizarSobre_mi = sobre_mi;
      button.setAttribute('data-target', '#editSobre_miModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public altasobre_mi(addForm: NgForm) {
    document.getElementById('add-sobre_mi-form')?.click();
    this.datosPorfolio.altasobre_mi(addForm.value).subscribe({
      next: (response: Sobre_mi) => {
        console.log(response);
        this.obtenersobre_mi();
        addForm.reset();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    })
  }

  public actualizarsobre_mi(sobre_mi: Sobre_mi) {
    this.actualizarSobre_mi = sobre_mi;
    document.getElementById('update-sobre_mi-form')?.click();
    this.datosPorfolio.actualizarsobre_mi(sobre_mi).subscribe({
      next: (response: Sobre_mi) => {
        console.log(response);
        this.obtenersobre_mi();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public eliminarsobre_mi(id: any): void {
    this.datosPorfolio.eliminarsobre_mi(id).subscribe({
      next: (response: void) => {
        console.log(response);
        this.obtenersobre_mi();
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

}
