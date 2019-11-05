import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.createForm();
  }

  createForm() {
    this.loginForm= this.fb.group({
     email: ['', Validators.required ],
     password: ['', Validators.required ]
    });
  }

  redirect() {
    this.router.navigate(['./equipment']);
  }

  ngOnInit() {
  }

}
