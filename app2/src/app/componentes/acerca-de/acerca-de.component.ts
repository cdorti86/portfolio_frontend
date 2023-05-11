import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  mostrarDiv : boolean = false;

  ngOnInit(): void {
  this.mostrarDiv = false ;
}
  cambiar_parrafo (): void {
    this.mostrarDiv = true ;
  };


}
