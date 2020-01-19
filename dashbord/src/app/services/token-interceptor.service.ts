import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(request, next){

    let authservice = this.injector.get(AuthService)
    let cloneReqToken = request.clone({
      setHeaders:{
        Authorization : 'Bearer ' + authservice.getToken()
      }
    })
    return next.handle(cloneReqToken);
  }
}
