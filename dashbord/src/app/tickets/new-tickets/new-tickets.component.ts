import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { QuillModule } from 'ngx-quill';
import * as $ from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';


declare let $: any;

@Component({
  selector: 'app-new-tickets',
  templateUrl: './new-tickets.component.html',
  styleUrls: ['./new-tickets.component.scss']
})
export class NewTicketsComponent implements OnInit {
  timeCal : any;
  addTicketForm: FormGroup;
  assignList:any;
  priorities:any;
  issues:any;
  templates:any;
  getContactsDetails:any;
  getDevicesList:any;
  getRecentTicketsList : any;
  selected : any;
  getLinkedContactName:any;
  onselectanyClient :boolean = false;
  getclientProjects:any;
  getTasklists:any;
  notifyDropLoder : boolean = false;
  ticketstatusupdate:any;

  hoveredDate: NgbDate;
  fromDate: NgbDate;
  toDate: NgbDate;

  time = {hour: 1, minute: 30};
  spinners = false;
  meridian = true;

  

  constructor(
    private fb: FormBuilder, 
    private service:AuthService,
    private calendar: NgbCalendar, 
    public formatter: NgbDateParserFormatter
              
  ){
   this.createForm();

   this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 0);
 }
  createForm() {
   this.addTicketForm = this.fb.group({
    template: [''],
    assigned: [''],
    clientName: ['', Validators.required ],
    project: [''],
    task: [''],
    contactName: [''],
    devices: [''],
    priorityType: [''],
    issue: ['', Validators.required ],
    title: ['', Validators.required ],
    editorRich:[''],
    timeUnit:[''],
    StartDate:[''],
    EndDate:[''],
    peopleNotify:[''],
    timepick:['']
   });
 }



conTrue = false;
conTrueOne = false;
schTicket = false;
isDisabled = false;
conTrueTwo = false;
ifIntTicket = false;
pickTemplate = false;
showProject = false;

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

selectTemplate(){
  this.pickTemplate = !this.pickTemplate;
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
    minHeight: '100px',
    height:'auto',
    borderRadius:'5px',
    fontSize:'15px',
    border:'1px solid #9e9e9e'
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




  DropLoder = false;
  eventHandler(searchValue: string): void { 
    //console.log('Email :'+ email, 'Password :'+ password);
    this.DropLoder = true;
    this.service.getContacts(searchValue).subscribe((data : any)=>{
        this.getContactsDetails = data;
        this.DropLoder = false;
    },
    (err : HttpErrorResponse)=>{
      console.log(err);
      this.DropLoder = false;
    });
  }




  ngOnInit() {
    this.service.getAssignList().subscribe(
      res=>{
        this.assignList = res;
      },
      err=>{
        console.log(err);
      }
    )
    

    this.service.getPriority().subscribe(
      res=>{
        this.priorities = res;
      },
      err=>{
        console.log(err);
      }
    )

    

    this.service.getIssues().subscribe(
      res=>{
        this.issues = res;
      },
      err=>{
        console.log(err);
      }
    )

    this.service.getTemplates().subscribe(
      res=>{
        this.templates = res;
      },
      err=>{
        console.log(err);
      }
    )


  this.onChangeclient(this.selectinitialCount);

  }

  selectinitialCount : any;
  typedval:any;
  fadeDiv: boolean = false;
  DropLoderDevList: boolean = false;

  onChangeclient(selectinitialCount) {
    //console.log(selectinitialCount);
    this.fadeDiv =true;
    this.service.getDevicesList(selectinitialCount, this.typedval).subscribe((data : any)=>{
      this.getDevicesList = data;
      //console.log(this.getDevicesList);
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
    })


    this.service.getRecentTicket(selectinitialCount).subscribe((data : any)=>{
      this.getRecentTicketsList = data
      //console.log(this.getRecentTicketsList);
      this.fadeDiv = false;
      //if(this.getRecentTicketsList.Status === ""
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
    })


    this.service.getLinkedContactName(selectinitialCount).subscribe((data : any)=>{
      this.getLinkedContactName = data
  
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
    })


    this.service.getClientProject(selectinitialCount).subscribe((data : any)=>{
      this.getclientProjects = data

      if (data.length != 0){
        this.onselectanyClient = true;
      }else
      this.onselectanyClient = false;
  
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
    })

  }

  searchDeviceList(typedval:any){
    this.DropLoderDevList = true;
    this.service.getDevicesList(this.selectinitialCount, typedval).subscribe((data : any)=>{
      this.getDevicesList = data;
      this.DropLoderDevList = false;
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
        this.DropLoderDevList = false;
    })
  }

  projectchange(projectID:any){
    //console.log(projectID);
    this.service.getProjectTask(projectID).subscribe((data : any)=>{
      this.getTasklists = data
  
    },
    (err : HttpErrorResponse)=>{ 
        console.log(err);
    })
  }

//Ng Datepicker scripts

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate, input: string): NgbDate {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  
}
