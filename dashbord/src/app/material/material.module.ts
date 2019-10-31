import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule, MatSidenavModule, MatBadgeModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatToolbarModule, 
    MatSidenavModule, 
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [ 
    MatButtonModule, 
    MatCheckboxModule, 
    MatRadioModule, 
    MatToolbarModule, 
    MatSidenavModule,
    MatBadgeModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatDialogModule,
    MatSelectModule
  ],
})
export class MaterialModule { }
