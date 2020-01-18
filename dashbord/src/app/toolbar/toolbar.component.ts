import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
constructor(private router : Router, private toastr: ToastrService) { }

  clicked = 0;
  
  select(i) {
    this.clicked = i;
  }

  logOutUser(){
    localStorage.removeItem("userToken");
    this.router.navigate(['/']);
    this.toastr.info("Logged Out");
  }

  ngOnInit() {
  }

}
