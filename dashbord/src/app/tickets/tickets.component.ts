import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ColsetService } from '../colset.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  arrClick: any = false;
  arrow :any;
  msg : any;
  issideOpen :any;
  setStatus = false;


  constructor(private router: Router, 
    private service:AuthService,
    private __selectvalue: ColsetService,
    private __selectvalue3: ColsetService
    ) { 

  }

  

  aarHide(newIcon: string, newMsg: string){
    this.arrClick = !this.arrClick;
    localStorage.setItem("subsidefiltersticket", new Boolean(this.arrClick).toString());

    if(this.arrow == 'fa-chevron-right'){
      this.arrow='fa-chevron-left';
    }
    else{
      this.arrow = newIcon ; 
    }

    if(this.msg == 'Open'){
      this.msg='Close';
    }
    else{
      this.msg = newMsg;
    }

  }

  redirect() {
    this.router.navigate(['./tickets/newtickets']);
  }

  clickHide = false;
  showHide(){
    this.clickHide = !this.clickHide;
  }

  ngOnInit() {
        //Get Initial state for sidefilters open/close
        if(localStorage.getItem('subsidefiltersticket') === 'false' || localStorage.getItem('subsidefiltersticket') == null ){
          this.arrClick = false;
          this.arrow='fa-chevron-left';
          this.msg='Close';
        }else{
          this.arrClick = true;
          this.arrow='fa-chevron-right';
          this.msg='Open';
        }
    
    
        this.__selectvalue3.showvale3$.subscribe(
          message =>{
            console.log(message)
            if(message  ==='open'){
              this.issideOpen = true;
            }
    
            else{
              this.issideOpen = false;
            }
            
          }
       );
    
      //Get Initial state for toolbarwidth
      if(localStorage.getItem('mainsidenavStateticket') === 'false' || localStorage.getItem('mainsidenavStateticket') == null ){
        this.issideOpen = false;
        }else{
          this.issideOpen = true;
        }

        
      this.__selectvalue.showvale$.subscribe(
        message =>{
          if (message === "yeschecked"){
            this.setStatus = true;
            console.log(message);
          }else if (message === "notChecked"){
            this.setStatus= false;
            console.log(message);
          }
        }
    );
  }

}
