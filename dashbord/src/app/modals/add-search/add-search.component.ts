import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {
  FormArray : any;
  srchForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
    }
  createForm() {
   this.srchForm = this.fb.group({
  
    'addresses': new this.FormArray([
        new FormGroup({
           'column': new FormControl(['', Validators.required ]),
           'operator': new FormControl(['', Validators.required ]),
           'compare': new FormControl(['', Validators.required ]),
        })
    ])
   });
 }

  ngOnInit() {
  }

}
