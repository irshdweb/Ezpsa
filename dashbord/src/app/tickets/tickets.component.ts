import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  arrClick = false;
  hasLock = true;
  public arrow = "fa-chevron-left";
  public msg = "Close";


  constructor(private router: Router) { 

  }

  aarHide(newIcon: string, newMsg: string){
    this.arrClick = !this.arrClick;
    this.hasLock = !this.hasLock;
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
  }

}
