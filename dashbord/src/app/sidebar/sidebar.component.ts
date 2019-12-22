import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //Changing menu icon 
public icon = 'menu'; 

public changeIcon(newIcon: string ){
    if(this.icon == 'menu_open'){
      this.icon='menu';
    }
    else{
      this.icon = newIcon ; 
    }
}
  @Output() menuButtonClickedMobiles = new EventEmitter();
  @Output() menuButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
