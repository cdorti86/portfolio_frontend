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
    this.usuarioLogueado = this.authService.estadoinicio()
  }
  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  onLogin(form: User) {
    this.authService.login(form);
    
    console.log("nuevo mensaje en el login" + this.authService.usuarioLogueado); 
};

  logout() {
    this.authService.logout();
    console.log("boton funciona");
    this.router.navigate(['/'])
  }
  
  atras(): void {
    this.location.back();
  }
}