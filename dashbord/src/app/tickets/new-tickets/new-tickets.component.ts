import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { QuillModule } from 'ngx-quill';
import * as $ from 'jquery';

declare let $: any;

@Component({
  selector: 'app-new-tickets',
  templateUrl: './new-tickets.component.html',
  styleUrls: ['./new-tickets.component.scss']
})
export class NewTicketsComponent implements OnInit {

  addTicketForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.addTicketForm = this.fb.group({
    assigned: ['', Validators.required ],
    client: ['', Validators.required ],
    project: ['', Validators.required ],
    contactName: ['', Validators.required ],
    devices: ['', Validators.required ],
    priority: ['', Validators.required ],
    issue: ['', Validators.required ],
    title: ['', Validators.required ],
    description: ['', Validators.required ],
    time: ['', Validators.required ],
    editorRich:['', Validators.required ],
    timeUnit:['', Validators.required ],
    StartDate:['', Validators.required ],
    EndDate:['', Validators.required ],
    peopleNotify:['', Validators.required ]
   });
 }

 public selectedMoments = [
  new Date(2019, 1, 12, 10, 30),
  new Date(2019, 3, 21, 20, 30)
];

conTrue = false;
conTrueOne = false;
schTicket = false;
isDisabled = false;
conTrueTwo = false;
ifIntTicket = false;
resTicket(){
  this.conTrue = !this.conTrue;
  this.schTicket = !this.schTicket;
}
scheduleTicket(){
  this.conTrueOne = !this.conTrueOne;
}
wholeDay(){
  this.isDisabled = !this.isDisabled;
}

advancedOption(){
  this.conTrueTwo = !this.conTrueTwo;
}

intTicket(){
  this.ifIntTicket = !this.ifIntTicket;
}


 files: any = [];
 public imagePath;
 imgURL: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }


    
    var reader = new FileReader();
    this.imagePath = event;
    reader.readAsDataURL(event[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }


  }
  deleteAttachment(index) {
    //this.files.splice(index, 1)
    this.files.splice(index)
  }


  /***Quil Js Text Editor Configs****/
  
  editorStyle ={
    height: '300px',
    boxShadow:'inset -1px 7px 35px -22px #757375',
    borderRadius:'5px',
    //color:'#a1a1a1',
    fontSize:'15px',
    border:'1px solid #c9c9c9'
  }

  config = {
    toolbar : [
      ['bold', 'italic', 'underline'],        // toggled buttons
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'align': [] }],
      ['link', 'image'],                         // link and image, video
      ['blockquote', 'code-block'],
    ]
  }
  clickTrue = false;
  showTool(){
    this.clickTrue = !this.clickTrue;
  }
  upld = false;
  showAtch(){
    this.upld = !this.upld;
  }

  ngOnInit() {
    $('.idealSelect').selectpicker('refresh');
    
  }
 
}
