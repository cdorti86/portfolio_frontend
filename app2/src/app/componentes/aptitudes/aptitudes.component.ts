import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { AptitudesService } from 'src/app/servicios/aptitudes.service';
import { Aptitud } from 'src/app/Model/aptitud';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {
  usuarioLogueado: boolean = false;
  public aptitudes: Aptitud[] = [];
  public actualizarAptitudes: Aptitud | undefined;
  public eliminarAptitudes: Aptitud | undefined;
  constructor(private datosPorfolio: AptitudesService, private loginUser: AuthService) {}
 
   ngOnInit() : void {
 this.datosPorfolio.obtenerdatosaptitud().subscribe(data => {
   console.log(data);
   this.aptitudes=data ;
  });
  this.usuarioLogueado = this.loginUser.estadoinicio()
 }
 public obteneraptitud(): void {
  this.datosPorfolio.obtenerdatosaptitud().subscribe({
    next: (Response: Aptitud[]) => {
      this.aptitudes = Response;
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })
}

public onOpenModal(mode: String, aptitud?: Aptitud): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');
  if (mode === 'add') {
    button.setAttribute('data-target', '#addAptitudModal');
  }
  else if (mode === 'delete') {
    this.eliminarAptitudes = aptitud;
    button.setAttribute('data-target', '#deleteAptitudModal');
  }
  else if (mode === 'edit') {
    this.actualizarAptitudes = aptitud;
    button.setAttribute('data-target', '#editAptitudSModal');
  }
  container?.appendChild(button);
  button.click();
}

public altaaptitud(addForm: NgForm) {
  document.getElementById('add-aptitud-form')?.click();
  this.datosPorfolio.altaaptitud(addForm.value).subscribe({
    next: (response: Aptitud) => {
      console.log(response);
      this.obteneraptitud();
      addForm.reset();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
      addForm.reset();
    }
  })
}

public actualizaraptitud(aptitud: Aptitud) {
  this.actualizarAptitudes = aptitud;
  document.getElementById('update-aptitud-form')?.click();
  this.datosPorfolio.actualizaraptitud(aptitud).subscribe({
    next: (response: Aptitud) => {
      console.log(response);
      this.obteneraptitud();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })
}

public eliminaraptitud(id: any): void {
  this.datosPorfolio.eliminaraptitud(id).subscribe({
    next: (response: void) => {
      console.log(response);
      this.obteneraptitud();
    },
    error: (error: HttpErrorResponse) => {
      alert(error.message);
    }
  })
}

}
