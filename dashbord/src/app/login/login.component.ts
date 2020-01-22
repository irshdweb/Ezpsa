import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{ AuthService } from './../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoginError : boolean = false;
  preLoder : boolean = false;
  removeAlert  = false;

  constructor(private auth : AuthService, private router : Router, private toastr: ToastrService) { 
    
  }

  onLoginSubmit(email:any,password:any){
    //console.log('Email :'+ email, 'Password :'+ password);
    this.preLoder = true;

    this.auth.userAuthentication(email,password).subscribe((data : any)=>{

      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/equipment']);
      console.log("login Success");
      this.toastr.success("Login Successfully");
      this.preLoder = false;
      this.removeAlert = true;

    },
    (err : HttpErrorResponse)=>{

      this.isLoginError = true;
      this.preLoder = false;
      this.removeAlert = false;
      //console.log(err);
      //this.toastr.error("The user name or password is incorrect.");
      
    });
  }

  ngOnInit() {
    //if (localStorage.getItem('userToken') != null)
    //this.router.navigate(["/equipment"]);
  }

}
