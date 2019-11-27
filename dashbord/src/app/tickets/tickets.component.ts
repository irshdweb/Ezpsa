import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  arrClick = false;
  hasLock = true;
  constructor() { }

  aarHide(){
    this.arrClick=true;
    this.hasLock=false;
  }

  aarShow(){
    this.arrClick=false;
    this.hasLock=true;
  }

  ngOnInit() {
  }

}
