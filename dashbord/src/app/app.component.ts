import { Component, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

import { filter} from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ColsetService } from './colset.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navExpand = false;
  newPages = false;
  showSidenavAll = true;
  isMenuOpen:any;
  ifOpen:boolean;


  
  @ViewChild('sidenav') sidenav: any;
    // Tracking device width to assign media query
    screenWidth: number;
    constructor(
      private router:Router, 
      private cookieService:CookieService,
      private __selectvalue :ColsetService
      ) {

      //hide sidenav and toolbar based on the routes
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(res => {
        if (this.router.url == "/") {
          this.navExpand = true;
        }else {
          this.navExpand = false;
        }


        if (this.router.url=="/tickets/newtickets" || this.router.url=="/equipment/new-equipments"){
          this.newPages = true;
        }else{
          this.newPages= false;
        }

        if (this.router.url=="/reset-password" || this.router.url=="/forgot-password"){
          this.showSidenavAll = false;
        }else{
          this.showSidenavAll= true;
        }


      });

      this.router.events.subscribe(event => {
        // close sidenav on routing
        if (this.isMenuOpen){
            this.isMenuOpen = true;
        }
      });
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };
    }

    public onCloseHalf(){
      this.isMenuOpen = !this.isMenuOpen;
      this.ifOpen = !this.ifOpen;
      localStorage.setItem("mainsidenavState", new Boolean(this.isMenuOpen).toString());

      //to get second toolbar width
      if(localStorage.getItem('mainsidenavState') === 'false' || localStorage.getItem('mainsidenavState') == null ){
        this.__selectvalue.sendState('closed');
      }else{
        this.__selectvalue.sendState('open');
      }
      
    }
  
    onCloseItem(){
      if (this.sidenav._mode=='over') {
        this.sidenav.close();
      }
    }
  
    ngOnInit() {
     this.getnavState();
     if(localStorage.getItem('mainsidenavState') === 'false' || localStorage.getItem('mainsidenavState') == null ){
        this.isMenuOpen = false;
        this.ifOpen= false;
     }else{
        this.isMenuOpen = true;
        this.ifOpen = true;
     }
    }
  
    getnavState(){
      return localStorage.getItem('mainsidenavState')
    }
}
