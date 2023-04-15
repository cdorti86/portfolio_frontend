import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {
  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService) {}
 
   ngOnInit() : void {
 this.datosPorfolio.obtenerdatosaptitud().subscribe(data => {
   console.log(data);
   this.miPorfolio=data ;
  });
 
 }
}
