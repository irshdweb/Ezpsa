import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss']
})
export class SchedulesComponent implements OnInit {
  checkTrue = false;
  constructor() { }
  checkChange(){
    this.checkTrue = !this.checkTrue;
  }

  ngOnInit() {
  }

}
