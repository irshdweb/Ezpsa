import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-detail-side-bar',
  templateUrl: './detail-side-bar.component.html',
  styleUrls: ['./detail-side-bar.component.scss']
})
export class DetailSideBarComponent implements OnInit {


  constructor() {
    
  }

  selectedCars = [3];
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  selectedTags = [1];
  tags = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  eqMenuTrigger = false;
  showMenu(){
    this.eqMenuTrigger = !this.eqMenuTrigger;  
  }

  ngOnInit() {
  }

}
