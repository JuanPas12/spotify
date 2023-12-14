import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  errorSesion : boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService) {

  }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10)
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
    .subscribe(responseOk => {
      console.log('Sesión iniciada correctamente');
      const { tokenSession, data } = responseOk
      this.cookie.set('token', tokenSession, 30, '/')
    }, err => {
      this.errorSesion = true
      console.log('Ocurrio un error con tu email o password');
    })
  }
}
