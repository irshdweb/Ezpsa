import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ColsetService } from '../colset.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-equipmentsidebar',
  templateUrl: './equipmentsidebar.component.html',
  styleUrls: ['./equipmentsidebar.component.scss']
})
export class EquipmentsidebarComponent implements OnInit {

  eqMenuTrigger = false;
  drop = false;
  drop1 = false;
  selectedIndex: number = 0;

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


leftSideFilters : any;
getfilters : any;
getInitial:boolean = true;
userID : any;
DropLoderList = false;

constructor(
  private router: Router, 
  private fb: FormBuilder, 
  private service:AuthService,
  private __selectvalue1: ColsetService,
  private __selectvalue2: ColsetService
  ) 
  { }

  changeList(eva:any){
    this.__selectvalue2.sendLeftValue(eva);

  }

  ngOnInit() {
      this.loadLeftFilters();
      this.loadFilterByClient();
  }

  loadFilterByClient(){
    this.__selectvalue1.showvale1$.subscribe(
      message =>{
        this.userID = message;
        this.loadLeftFilters();
        this.DropLoderList = true;
      }
    );
  }

  loadLeftFilters(){
    this.service.getequipmentFilters(this.userID).subscribe(
      res=>{
        this.leftSideFilters= res;
        this.DropLoderList = false;
      },
      err=>{
      }
    )
  }

  setIndex(index: number) {
    this.selectedIndex = index;
 }

}
