import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Jhon Doe', 'Kennedy', 'Ann'];
  filteredOptions: Observable<string[]>;

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

  aarHide(){
    this.arrClick=true;
    this.hasLock=false;
  }

  aarShow(){
    this.arrClick=false;
    this.hasLock=true;
  }

}
