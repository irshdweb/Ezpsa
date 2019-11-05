import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

//Changing menu icon 
public icon = 'menu'; 

public changeIcon(newIcon: string ){
    if(this.icon == 'clear_all'){
      this.icon='menu';
    }
    else{
      this.icon = newIcon ; 
    }
}
//passing method to another component
@Output() menuButtonClicked = new EventEmitter();
@Output() menuButtonClickedMobile = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
