import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://services.ezpsa.com';

  constructor(private http: HttpClient) { }

  userAuthentication(email:any,password:any) {
    var data = "client_id=demo.ezpsa.com&client_secret=ServiceCat&grant_type=password&scope=equipment.all&username=" + email + "&password=" + password ;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.baseUrl + '/token', data, { headers: reqHeader });
  }

  getToken(){
    return localStorage.getItem('userToken')
  }
}
