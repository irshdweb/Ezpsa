import { Component } from '@angular/core';
import { Router} from '@angular/router';

import { filter} from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navExpand = false;
  newPages = false;
    // Tracking device width to assign media query
    screenWidth: number;
    constructor(private router:Router) {

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

      //this.router.events.subscribe(event => {
        // close sidenav on routing
       
      //});
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };
    }

    isMenuOpen = false;
    ifOpen = false;
    public onCloseHalf(){
      this.isMenuOpen = !this.isMenuOpen;
      
      if(this.isMenuOpen){
        this.ifOpen = true;
      }else{
        this.ifOpen = false;
      }
    }

    ngOnInit() {
    
  }
}
