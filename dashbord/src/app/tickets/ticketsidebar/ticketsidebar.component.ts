import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticketsidebar',
  templateUrl: './ticketsidebar.component.html',
  styleUrls: ['./ticketsidebar.component.scss']
})
export class TicketsidebarComponent implements OnInit {

  /**duplicate function must be do by service */
  eqMenuTrigger = false;
  drop = false;
  drop1 = false;
  showMenu(){
    this.eqMenuTrigger = !this.eqMenuTrigger;  
  }

  showClosedMenu(){
    this.eqMenuTrigger=true;
  }

  showGroup(){
    this.drop = !this.drop; 
  }

  showGroup1(){
    this.drop1 = !this.drop1; 
  }

public icons = 'keyboard_arrow_right'; 
public changeIcons(newIcon: string ){
    if(this.icons == 'keyboard_arrow_down'){
      this.icons='keyboard_arrow_right';
    }
    else{
      this.icons = newIcon ; 
    }
}

public icons1 = 'keyboard_arrow_right';
public changeIcons1(newIcon1: string ){
  if(this.icons1 == 'keyboard_arrow_down'){
    this.icons1='keyboard_arrow_right';
  }
  else{
    this.icons1 = newIcon1 ; 
  }
}
/**duplicate function must be do by service */
  constructor() { }

  ngOnInit() {
  }

}


