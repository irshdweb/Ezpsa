import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
   });
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
    this.files.splice(index, 1)
  }
  

  ngOnInit() {
  }

}
