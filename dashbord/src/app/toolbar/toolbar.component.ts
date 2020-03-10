import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import { ColsetService } from '../colset.service';

declare let $: any;

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  issideOpen : any;

//passing method to another component
@Output() menuButtonClicked = new EventEmitter();
@Output() menuButtonClickedMobile = new EventEmitter();
constructor(private router : Router, 
            private toastr: ToastrService,
            private __selectvalue3 :ColsetService
){ }

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

    this.__selectvalue3.showvale3$.subscribe(
      message =>{
        //console.log(message)
        if(message  ==='open')
          this.issideOpen = true;
        else
        this.issideOpen = false;
      }
   );

  //Get Initial state for toolbarwidth
  if(localStorage.getItem('mainsidenavState') === 'false' || localStorage.getItem('mainsidenavState') == null ){
    this.issideOpen = false;
    }else{
      this.issideOpen = true;
    }

  }

}
