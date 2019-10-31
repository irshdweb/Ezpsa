import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // Tracking device width to assign media query
    screenWidth: number;
    constructor() {
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
      };
    }

    isMenuOpen = true;
    contentMargin = 238;

    public onCloseHalf(){
      this.isMenuOpen = !this.isMenuOpen;
      
      if(this.isMenuOpen){
        this.contentMargin = 238;
      }else{
        this.contentMargin = 80;
      }
    }
}
