import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private toastr: ToastrService) { 
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    //state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('userToken') != null)
    return true;
    this.router.navigate(["/"]);
    this.toastr.error("Access Denied.. Please Login First !");
    return false;
  }
  
}
