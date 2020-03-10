import {  Component, Output, EventEmitter, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //Changing menu icon 
  public icon :string; 

  public changeIcon(newIcon: string ){
      if(this.icon == 'menu_open' || localStorage.getItem('mainsidenavState') === 'false'){
        this.icon='menu';
      }
      else{
        this.icon = 'menu_open' ; 
      }
  }

  @Output() menuButtonClickedMobiles = new EventEmitter();
  @Output() menuButtonClickedItem = new EventEmitter();
  @Output() menuButtonClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if(localStorage.getItem('mainsidenavState') === 'false' || localStorage.getItem('mainsidenavState') == null ){
      this.icon = 'menu';
    }else{
      this.icon = 'menu_open';
    }
  }

}
