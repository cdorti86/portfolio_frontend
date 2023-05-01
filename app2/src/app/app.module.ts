import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { LogrosComponent } from './componentes/logros/logros.component';

import { HttpClientModule} from '@angular/common/http';
import { NavComponent } from './componentes/nav/nav.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesComponent,
    LogrosComponent,
    NavComponent,
    EducacionComponent,
    ProyectoComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
