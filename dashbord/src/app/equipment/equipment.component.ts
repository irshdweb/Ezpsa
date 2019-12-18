import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Jhon Doe', 'Kennedy', 'Ann'];
  filteredOptions: Observable<string[]>;
 

  constructor(private router: Router) { 

  }

ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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
