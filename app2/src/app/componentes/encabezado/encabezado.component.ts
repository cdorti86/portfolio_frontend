import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit { 
miPorfolio:any;

 constructor(private datosPorfolio:PorfolioService) {}

  ngOnInit() : void {
this.datosPorfolio.obtenerdatos().subscribe(data => {
  console.log(data);
  this.miPorfolio=data ;
 });

}

}

