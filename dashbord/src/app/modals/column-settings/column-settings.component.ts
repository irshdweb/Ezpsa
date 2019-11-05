import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';
import { ColsetService } from '../../colset.service';
@Component({
  selector: 'app-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.scss']
})
export class ColumnSettingsComponent implements OnInit {

  clickAll = false;


  constructor(private __selectvalue: ColsetService) { }

  checkValue(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkValueAgentVersion(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkValueLastAgent(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkValueLastUser(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkWarrantyExpiry(event: any){
    this.__selectvalue.sendValue(event);
  }

  ngOnInit() {
  }

}
