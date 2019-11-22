import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-ticket-fillter',
  templateUrl: './ticket-fillter.component.html',
  styleUrls: ['./ticket-fillter.component.scss']
})
export class TicketFillterComponent implements OnInit {
  srchTicket : FormGroup;
  resolved = false;
  closed = false;

  constructor(private fb: FormBuilder) {
    this.searchTicket();
   }

  searchTicket() {
    this.srchTicket = this.fb.group({
     name: [],
     project: [], 
     Assigned: [], 
     lastResponse: [],
     ShowDeleted: [],
     Staus: [],
     callType: [],
     tags:[],
     priority:[],
     ticketSource:[],
     following:[],
     date:[],
     datetype:[],
     resolvedBy:[],
     closedBy:[]
    });
  }

  /**Select all for angular material multiple select */
  statusControl = new FormControl();
  statusList: string[] = ['Open', 'Awaiting and Held Items', 'Resolved', 'Closed', 'Reopen', 'Peer Review', 'Ready For Testing'];
  
  selectAll(ev){
    if(ev._selected){
      this.statusControl.setValue(this.statusList);
      ev._selected=true;
    }
    if(ev._selected==false){
      this.statusControl.setValue([]);
    }
  }
 /** ./Select all for angular material multiple select */
 date: string;
 onDateSelect() {
  console.log(this.date);
  if(this.date=="Date Resolved"){
    this.resolved= true;
    this.closed = false;
    this.statusControl.setValue(['Resolved']);
  }
  if(this.date=="Date Closed"){
    this.closed= true;
    this.resolved= false;
    this.statusControl.setValue(['Closed']);
  }
  if(this.date=="Date Created"){
    this.closed= false;
    this.resolved= false;
    this.statusControl.setValue([]);
  }
}

  ngOnInit() {
  }

}
