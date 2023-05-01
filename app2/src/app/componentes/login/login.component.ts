import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '@firebase/auth';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  
  
  constructor(private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private location: Location,
    private authService:AuthService) {
    this.form = this.formBuilder.group({
      usuario : ['',[Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      password : ['',[Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]] 
    })
}

ngOnInit() : void {
    this.route.paramMap.subscribe( (paramMap:any) => 
    {const {params} = paramMap
    console.log(params.variable);
  })
 }

get usuario() {
  return this.form.get("usuario");
}

get password(){
  return this.form.get("password");
}

get email(){
 return this.form.get("email");
}

get usuarioValid() {
  return false
}

get passwordValid(){
  return this.password?.touched && !this.password?.valid;
}

get emailValid() {
  return false
}

// Lo cree para poder seguir con el resto
//onLogin(form: User) {
//  this.authService.login(form);
// }

onEnviar(event: Event){
  // Detenemos la propagación o ejecución del compotamiento submit de un form
  event.preventDefault; 

  if (this.form.valid){
    // Llamamos a nuestro servicio para enviar los datos al servidor
    // También podríamos ejecutar alguna lógica extra
    alert("Todo salio bien ¡Enviar formuario!")
  }else{
    // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    this.form.markAllAsTouched(); 
  }

}
  atras(): void {
    this.location.back();
  }
}