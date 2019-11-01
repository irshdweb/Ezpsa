import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.scss']
})
export class AddEquipmentComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
    firstName: ['', Validators.required ],
    Description: ['', Validators.required ],
    Type: ['', Validators.required ],
    Status: ['', Validators.required ],
    SerialNumber: ['', Validators.required ],
    Location: ['', Validators.required ],
    Manufacturer: ['', Validators.required ],
    Model: ['', Validators.required ],
    Firmware: ['', Validators.required ],
    IPAddress: ['', Validators.required ],
    MACAddress: ['', Validators.required ],
    AssetNumber: ['', Validators.required ],
    BarcodeNumber: ['', Validators.required ],
    PurchaseDate: ['', Validators.required ],
    WarrantyExpires: ['', Validators.required ]
   });
 }

  ngOnInit() {
  }

}
