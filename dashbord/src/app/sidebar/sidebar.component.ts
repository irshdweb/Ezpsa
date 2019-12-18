import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() menuButtonClickedMobiles = new EventEmitter();
  @Output() menuButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
