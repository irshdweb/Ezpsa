import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl,FormArray } from '@angular/forms';
import { group } from '@angular/animations';

@Component({
  selector: 'app-add-search',
  templateUrl: './add-search.component.html',
  styleUrls: ['./add-search.component.scss']
})
export class AddSearchComponent implements OnInit {
  srchForm: FormGroup;
  check = false;
  showSaveTxt = false;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.srchForm = this.fb.group({

    searchFields : new FormArray([
      this.newFormAdd()
    ])
   });
 }

 newFormAdd(){
  return this.fb.group({
    column: ['', Validators.required ],
    operator: ['', Validators.required ],
    compare: ['', Validators.required ]
  })
 }

 addMore(){
   let srchArray = this.srchForm.get('searchFields') as FormArray;
   srchArray.push(this.newFormAdd())
   this.check= true;
 }

 deleteMore(){
  let srchArray = this.srchForm.get('searchFields') as FormArray;
  srchArray.removeAt(this.addMore.length)
 }

 toggleEditable(event) {
  if ( event.target.checked ) {
      this.showSaveTxt = true;
 }
}

  ngOnInit() {
  }

}
