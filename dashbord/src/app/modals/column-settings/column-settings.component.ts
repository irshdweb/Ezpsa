import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';
import { ColsetService } from '../../colset.service';
@Component({
  selector: 'app-column-settings',
  templateUrl: './column-settings.component.html',
  styleUrls: ['./column-settings.component.scss']
})
export class ColumnSettingsComponent implements OnInit {

  // select all checkbox true
  clickAll = true;
  isChecked = true;
  isCheckedAv = true;
  isCheckedLav = true;
  isCheckedLu = true;
  isCheckedWe = true;
  isCheckedDn = true;
  isCheckedDc = true;
  isCheckedAn = true;
  isCheckedSn = true;
  isCheckedSt = true;
  isCheckedIp = true;
  isCheckedMc = true;
  isCheckedLc = true;
  isCheckedId = true;
  isCheckedCt = true;
  isCheckedMr = true;
  isCheckedPr = true;
  isCheckedGw = true;

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

  checkDeviceName(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkDescription(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkAnumber(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkSnumber(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkSt(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkIp(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkMc(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkLc(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkId(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkCt(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkMr(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkPr(event: any){
    this.__selectvalue.sendValue(event);
  }

  checkGw(event: any){
    this.__selectvalue.sendValue(event);
  }

  clickAllValue(event: any){
    this.__selectvalue.sendValue(event);
  }

  ngOnInit() {
  }

}
