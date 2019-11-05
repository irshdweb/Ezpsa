import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipmentsidebar',
  templateUrl: './equipmentsidebar.component.html',
  styleUrls: ['./equipmentsidebar.component.scss']
})
export class EquipmentsidebarComponent implements OnInit {

  eqMenuTrigger = false;
  drop = false;
  
  showMenu(){
    this.eqMenuTrigger = !this.eqMenuTrigger;  
  }

  showGroup(){
    this.drop = !this.drop;  
  }

  constructor() { }

  ngOnInit() {
  }

}
