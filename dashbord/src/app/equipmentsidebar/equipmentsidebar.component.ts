import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipmentsidebar',
  templateUrl: './equipmentsidebar.component.html',
  styleUrls: ['./equipmentsidebar.component.scss']
})
export class EquipmentsidebarComponent implements OnInit {

  eqMenuTrigger = false;
  drop = false;
  drop1 = false;
  showMenu(){
    this.eqMenuTrigger = !this.eqMenuTrigger;  
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

  constructor() { }

  ngOnInit() {
  }

}
