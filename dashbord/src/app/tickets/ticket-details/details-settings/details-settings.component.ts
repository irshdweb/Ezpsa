import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-settings',
  templateUrl: './details-settings.component.html',
  styleUrls: ['./details-settings.component.scss']
})
export class DetailsSettingsComponent implements OnInit {

  constructor() { }
  selectedCars = [1];
  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  ngOnInit() {
  }

}
