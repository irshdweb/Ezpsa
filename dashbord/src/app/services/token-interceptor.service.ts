import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector, private router : Router) { }

  /*intercept(request, next){

    let authservice = this.injector.get(AuthService)
    let cloneReqToken = request.clone({
      setHeaders:{
        Authorization : 'Bearer ' + authservice.getToken()
      }
    })
    return next.handle(cloneReqToken);
  }*/
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    
    if(localStorage.getItem('userToken') != null){
        const cloneReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('userToken'))
        });
        return next.handle(cloneReq).pipe(
          tap(
            succ =>{},
            err =>{
              // if token expired
              if(err.status === 401){
                localStorage.removeItem('userToken')
                this.router.navigateByUrl('/');
                console.log('Token Expired Please login First')
              }
            }
          )
        )
    }
    else
    return next.handle(req.clone());
  }

}
