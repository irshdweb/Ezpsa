import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://services.ezpsa.com';

  constructor(private http: HttpClient) { }


  //Authentication with JWT
  userAuthentication(email:any,password:any) {
    var data = "client_id=demo.ezpsa.com&client_secret=ServiceCat&grant_type=password&scope=equipment.all&username=" + email + "&password=" + password ;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.baseUrl + '/token', data, { headers: reqHeader });
  }

  //Getting stored token from local storage
  getToken(){
    return localStorage.getItem('userToken');
  }

  //Get Assign List
  getAssignList(){
    return this.http.get(this.baseUrl+'/Ticket/GetAssignList');
  }
  
  //Get Priorities
  getPriority(){
    return this.http.get(this.baseUrl+'/Ticket/GetPriorities')
  }

  //Get Status
  getIssues(){
    return this.http.get(this.baseUrl+'/Ticket/GetIssues')
  }

  //Get Templates
  getTemplates(){
    return this.http.get(this.baseUrl+'/Ticket/GetTemplates')
  }

  //Get Searched Contacts
  getContacts(searchValue: any){
    return this.http.get(this.baseUrl+'/Contact/SearchContacts?searchTerm=' + searchValue)
  }
}
