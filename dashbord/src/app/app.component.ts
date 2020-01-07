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

    isMenuOpen = false;
    ifOpen = false;
    private cookievalue:string;
    public onCloseHalf(){
      this.isMenuOpen = !this.isMenuOpen;
      this.cookieService.set("mainState",new Boolean(this.ifOpen).toString());
      this.cookieService.set("mainStateCl",new Boolean(!this.ifOpen).toString());

      this.cookievalue = this.cookieService.get('mainState');
      this.cookievalue = this.cookieService.get('mainStateCl');

      if(this.isMenuOpen){
        this.cookieService.set("op", new Boolean(this.ifOpen=true).toString());
        //console.log(this.cookieService.get('op'));
        this.cookievalue = this.cookieService.get('op');
      }else{
        this.cookieService.set("cl", new Boolean(this.ifOpen=false).toString());
        //console.log(this.cookieService.get('cl'));
        this.cookievalue = this.cookieService.get('cl');
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
