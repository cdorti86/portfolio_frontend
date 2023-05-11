import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) {}
 
   ngOnInit() : void {
 this.datosPorfolio.obtenerdatosproyecto().subscribe(data => {
   console.log(data);
   this.miPorfolio=data ;
  });
 }
 }
