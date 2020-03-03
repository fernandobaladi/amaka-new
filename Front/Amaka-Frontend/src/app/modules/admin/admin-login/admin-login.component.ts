import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private route: ActivatedRoute) { }


  createLoginForm() {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.createLoginForm()
  }

  usuario = "amaka@gmail.com"
  contrasena = "12345Amaka";

  loginButton() {

    if ((this.loginForm.value.user === this.usuario) && (this.loginForm.value.password === this.contrasena)) {
      
      alert('cool');
      this.router.navigate(["/admin/products"]);
      
    } else {
      alert('Usuario no encontrado, por favor ingresa un usuario válido');
      this.loginForm.value.user = "";
      this.loginForm.value.password = "";
    }
  }


}
