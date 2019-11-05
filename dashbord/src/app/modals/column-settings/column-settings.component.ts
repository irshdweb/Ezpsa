import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.scss']
})
export class ColumnSettingsComponent implements OnInit {

  per = false;
  checkValue(event: any){
     
    console.log(event);
 }

  constructor() { }

  ngOnInit() {
  }

}
