import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

declare let $: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

//passing method to another component
@Output() menuButtonClicked = new EventEmitter();
@Output() menuButtonClickedMobile = new EventEmitter();
  constructor() { }

  clicked = 0;
  
  select(i) {
    this.clicked = i;
  }

  ngOnInit() {
  }

}
