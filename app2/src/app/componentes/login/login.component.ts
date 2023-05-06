import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/servicios/auth.service';
import { User } from 'src/app/Model/user.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  usuarioLogueado: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
    private router: Router,
    private authFire: AngularFireAuth) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      console.log(params.variable);
    })
  }
  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  // Lo cree para poder seguir con el resto
  onLogin(form: User) {
    this.authService.login(form);
    this.authFire.authState.subscribe(user=>
      { if (user) { this.usuarioLogueado  = true 
//      this.router.navigate(['/'])
    }
    else
    { this.usuarioLogueado = false
//      this.router.navigate(['/Login'])
    } }
    );
    console.log("nuevo mensaje" + this.usuarioLogueado); 
};
    
//      );
//    }

  // onEnviar(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
  //  event.preventDefault;
  //  if (this.form.valid) {
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
  //    alert("Todo salio bien ¡Enviar formuario!")
  //  } else {
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
  //    this.form.markAllAsTouched();
  //  }
  //}
  atras(): void {
    this.location.back();
  }
}