import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educationList:any;
  constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit() : void {
  this.datosPorfolio.obtenerdatos().subscribe(data=> {
    this.educationList=data.education; 
})
}
}
