import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AllEquipmentComponent } from './equipment/all-equipment/all-equipment.component'
import { SettingsComponent } from './settings/settings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { Last20Component } from './tickets/last20/last20.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'equipment', 
    component: EquipmentComponent,
    children:[
      { path: '', component: AllEquipmentComponent, outlet: 'second' },
    ] 
  },
  { path: 'settings', component: SettingsComponent },
  { 
    path: 'tickets', 
    component: TicketsComponent,
    children:[
      { path: '', component: Last20Component, outlet: 'ticket' },
    ]  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
