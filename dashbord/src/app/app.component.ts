import { Component, ViewChild } from '@angular/core';
import { Router} from '@angular/router';

import { filter} from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navExpand = false;
  newPages = false;
  @ViewChild('sidenav', { static: false }) sidenav: any;
    // Tracking device width to assign media query
    screenWidth: number;
    constructor(private router:Router, private cookieService:CookieService) {

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

    //isMenuOpen :boolean;
    ifOpen  = false;

    //localStorage['op'] = JSON.stringify(test);
   isMenuOpen:boolean = false;
    
    public onCloseHalf(){
      this.isMenuOpen = !this.isMenuOpen;
      if(this.isMenuOpen){
        this.ifOpen = true;
        localStorage.setItem("op", new Boolean(this.ifOpen=true).toString());
        //localStorage.getItem ('op');
      }else{
        this.ifOpen = false;
        localStorage.removeItem("op");
        //localStorage.getItem ('op');
      }
    }

    onCloseItem(){
      if (this.sidenav._mode=='over') {
        this.sidenav.close();
      }
    }

    ngOnInit() {
    
  }
}
