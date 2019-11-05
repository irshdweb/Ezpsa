import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import {FormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentsidebarComponent } from './equipmentsidebar/equipmentsidebar.component';
import { AllEquipmentComponent } from './equipment/all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './modals/add-equipment/add-equipment.component';
import { AddSearchComponent } from './modals/add-search/add-search.component';
import { ColumnSettingsComponent } from './modals/column-settings/column-settings.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    ToolbarComponent,
    EquipmentComponent,
    EquipmentsidebarComponent,
    AllEquipmentComponent,
    AddEquipmentComponent,
    AddSearchComponent,
    ColumnSettingsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
