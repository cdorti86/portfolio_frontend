import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  educationList:any;
  experienceList:any;
  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit() : void {
  this.datosPorfolio.obtenerdatos().subscribe(data=> {
    this.educationList=data.education; 
})
this.datosPorfolio.obtenerdatos().subscribe(data=> {
  this.experienceList=data.experience;
})
  }


}
