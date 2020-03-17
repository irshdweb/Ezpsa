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
  issideOpen :any;
  runscript: boolean = false;

  arrClick: any = false;
  arrow :any;
  msg : any;


  constructor(private router: Router, 
    private fb: FormBuilder, 
    private service:AuthService,
    private __selectvalue: ColsetService,
    private __selectvalue3: ColsetService
    ) { 

  }

   onChangeclientselect(selectedClient:any) {
    this.__selectvalue.sendjson(selectedClient);
  }

ngOnInit() {

  this.__selectvalue.showvale$.subscribe(
    message =>{
      if (message === "yeschecked"){
        this.runscript = true;
        console.log(message);
      }else if (message === "notChecked"){
        this.runscript= false;
        console.log(message);
      }
    }
 );



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

    //Get Initial state for sidefilters open/close
    if(localStorage.getItem('subsidefilters') === 'false' || localStorage.getItem('subsidefilters') == null ){
      this.arrClick = false;
      this.arrow='fa-chevron-left';
      this.msg='Close';
    }else{
      this.arrClick = true;
      this.arrow='fa-chevron-right';
      this.msg='Open';
    }


    this.__selectvalue3.showvale3$.subscribe(
      message =>{
        console.log(message)
        if(message  ==='open'){
          this.issideOpen = true;
        }

        else{
          this.issideOpen = false;
        }
        
      }
   );

  //Get Initial state for toolbarwidth
  if(localStorage.getItem('mainsidenavState') === 'false' || localStorage.getItem('mainsidenavState') == null ){
    this.issideOpen = false;
    }else{
      this.issideOpen = true;
    }
}

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  aarHide(newIcon: string, newMsg: string){
    this.arrClick = !this.arrClick;
    localStorage.setItem("subsidefilters", new Boolean(this.arrClick).toString());

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
