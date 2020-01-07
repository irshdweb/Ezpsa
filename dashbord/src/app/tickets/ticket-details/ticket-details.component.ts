import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {
  ticketId : string;
  clickFollow = false;
  public followIcon = "fa-check-square";
  public followMsg = "Follow Ticket";

  constructor(private actRoute: ActivatedRoute,private toastr: ToastrService) {
    this.ticketId = this.actRoute.snapshot.params.ticket_id
  }

  titleEdit(){
    document.getElementById("titleText").contentEditable = "true";
    console.log("clicked");
  }

  follow(newIcon: string, newMsg: string){
    this.clickFollow = !this.clickFollow;
    

    if(this.followIcon == 'fa-minus-square'){
      this.followIcon='fa-check-square';
    }
    else{
      this.followIcon = newIcon ; 
    }

    if(this.followMsg == 'Unfollow Ticket'){
      this.followMsg='Follow Ticket';
      this.toastr.info('Ticket Unfollowed');
    }
    else{
      this.followMsg = newMsg;
      this.toastr.success('Ticket Following');
    }
  }

  arrClick = false;
  hasLock = true;
  public arrow = "fa-chevron-left";
  public msg = "Close";
  aarHide(newIcon: string, newMsg: string){
    this.arrClick = !this.arrClick;
    this.hasLock = !this.hasLock;
    if(this.arrow == 'fa-chevron-right'){
      this.arrow='fa-chevron-left';
    }
    else{
      this.arrow = newIcon ; 
    }

    if(this.msg == 'Open'){
      this.msg='Close';
    }
    else{
      this.msg = newMsg;
    }
  }

  localmenuShow = false;
  openLocalMenu(){
    this.localmenuShow = !this.localmenuShow;
    console.log("working");
  }

  ngOnInit() {
    //this.actRoute.paramMap.subscribe(params => {
      //this.ticketId = params.get('ticket_id');
    //});
  }

}
