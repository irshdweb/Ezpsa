import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipmentsidebar',
  templateUrl: './equipmentsidebar.component.html',
  styleUrls: ['./equipmentsidebar.component.scss']
})
export class EquipmentsidebarComponent implements OnInit {

  eqMenuTrigger = false;
  
  showMenu(){
    this.eqMenuTrigger = !this.eqMenuTrigger;  
  }

  constructor() { }

  ngOnInit() {
  }

}
