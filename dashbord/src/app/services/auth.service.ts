import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://services.ezpsa.com';
  leftSideFilters: Object;
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
    if (searchValue != '')
        return this.http.get(this.baseUrl+'/Contact/SearchContacts?searchTerm=' + searchValue)
    else
      return this.http.get(this.baseUrl+'/Contact/SearchContacts?searchTerm=0')  
  }

  //Get Device List
  getDevicesList(selectinitialCount : any, typedval:any){
    let deviceparam = new HttpParams();

    if (selectinitialCount != null){
      deviceparam = deviceparam.set('masterId',selectinitialCount)
    }

    if (typedval != null){
      deviceparam = deviceparam.set('searchTerm',typedval)
    }

    if (typedval == ''){
      deviceparam = deviceparam.set('searchTerm', '0')
    }

    deviceparam = deviceparam.append('searchTerm','0');
    deviceparam = deviceparam.append('page','1');
    deviceparam = deviceparam.append('size','10');
    deviceparam = deviceparam.append('masterId','0');

    return this.http.get(this.baseUrl+'/Device/SearchDevices', {params: deviceparam})
  }

  //Get Contact Name
  getLinkedContactName(selectinitialCount: any){
    let contactparam = new HttpParams();

    if (selectinitialCount != null){
      contactparam = contactparam.set('masterId',selectinitialCount)
    }

    contactparam = contactparam.append('masterId','0');
    return this.http.get(this.baseUrl+'/Contact/GetLinkedContacts', {params: contactparam})
  }

//Get Recent Ticket

  getRecentTicket(selectinitialCount:any){
    let ticketparam = new HttpParams;

    if(selectinitialCount !=null){
      ticketparam = ticketparam.set('masterId', selectinitialCount)
    }

    ticketparam = ticketparam.append('masterId','0')

    return this.http.get(this.baseUrl+'/Ticket/GetRecentTickets', {params: ticketparam})
  }


  //Get project

  getClientProject(selectinitialCount){
    let projectparam = new HttpParams();

    if(selectinitialCount !=null){
      projectparam = projectparam.set('masterId', selectinitialCount)
    }

    projectparam = projectparam.append('masterId','0')

    return this.http.get(this.baseUrl+'/Contact/GetContactProjects', {params: projectparam})
  }

  getProjectTask(projectID:any){
    let projecttaskparam = new HttpParams();

    if(projecttaskparam !=null){
      projecttaskparam = projecttaskparam.set('projectID', projectID)
    }

    projecttaskparam = projecttaskparam.append('projectID','0')

    return this.http.get(this.baseUrl+'/Contact/GetProjectTasks', {params: projecttaskparam})
  }



  /*****************************************************
   ******************************************************
   * Equipment Grid Page Binding
   *******************************************************
  *******************************************************/

  //Top DropDown Binding ("Search Contact")
  getequipmentContact(){
    return this.http.get(this.baseUrl+'/Equipment/GetDeviceContacts');
  }

  //Left Filters Binding
  getequipmentFilters(userID: any){
    let param = new HttpParams();

    if(userID != null){
      param= param.set('ContactID', userID);
    }

    param = param.append('ContactID','-1')
    return this.http.get(this.baseUrl+'/Equipment/Summary', {params: param})
  }

  //RightFilters Binding
  getrightinitial(p:any, itemPerPage:any, clientInfo:any, leftparam:any){
    let parameq = new HttpParams();

    if (p != null){
      parameq = parameq.set('page', p);
    }

    if(itemPerPage != null){
      parameq = parameq.set('size', itemPerPage);
    }

    if(clientInfo != null){
      parameq = parameq.set('ContactID', clientInfo);
    }

    if(leftparam != null){
      parameq = parameq.set('GroupID', leftparam);
    }

    parameq = parameq.append('ContactID','-1');
    parameq = parameq.append('GroupID','all');
    parameq = parameq.append('page','1');
    parameq = parameq.append('size','10');

    return this.http.get(this.baseUrl+'/Equipment/List', {params: parameq})
  }

}
