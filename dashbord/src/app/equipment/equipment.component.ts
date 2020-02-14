import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, Form} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ColsetService } from '../colset.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Jhon Doe', 'Kennedy', 'Ann'];
  filteredOptions: Observable<string[]>;
 
  equipmentContacts : any;
  selectedClient : any;


  constructor(private router: Router, 
    private fb: FormBuilder, 
    private service:AuthService,
    private __selectvalue: ColsetService
    ) { 

  }

   onChangeclientselect(selectedClient:any) {
    this.__selectvalue.sendjson(selectedClient);
  }

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

      this.service.getequipmentContact().subscribe(
        res=>{
          this.equipmentContacts= res;
        },
        err=>{
          console.log(err);
        }
      )
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  arrClick = false;
  hasLock = true;
  public arrow = "fa-chevron-left";
  public msg = "Close"

  aarHide(newIcon: string, newMsg: string){
    this.arrClick = !this.arrClick;
    this.hasLock = !this.hasLock;
    if(this.arrow == 'fa-chevron-right'){
      this.arrow='fa-chevron-left';
    }
    else{
      this.arrow = newIcon ; 
    }

    if(this.msg == 'Open'){
      this.msg='Close';
    }
    else{
      this.msg = newMsg;
    }
  }
  redirect() {
    this.router.navigate(['./equipment/new-equipments']);
  }


}
