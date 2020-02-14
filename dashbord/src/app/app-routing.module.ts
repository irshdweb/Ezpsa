import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AllEquipmentComponent } from './equipment/all-equipment/all-equipment.component'
import { SettingsComponent } from './settings/settings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { Last20Component } from './tickets/last20/last20.component';
import { NewTicketsComponent } from './tickets/new-tickets/new-tickets.component';
import { NewEquipmentsComponent } from './equipment/new-equipments/new-equipments.component';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { DetailsComponent } from './tickets/ticket-details/details/details.component';
import { DevicesComponent } from './tickets/ticket-details/devices/devices.component';
import { PartsComponent } from './tickets/ticket-details/parts/parts.component';
import { TimesheetComponent } from './tickets/ticket-details/timesheet/timesheet.component';
import { OtherDetailsComponent } from './tickets/ticket-details/other-details/other-details.component';
import { SchedulesComponent } from './tickets/ticket-details/schedules/schedules.component';
import { DetailsSettingsComponent } from './tickets/ticket-details/details-settings/details-settings.component';
import { DetailsChecklistComponent } from './tickets/ticket-details/details-checklist/details-checklist.component';
import { AuthGuard } from './services/auth.guard';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'forgot-password', component: ResetPasswordComponent },
  { path: 'reset-password', component: CreatePasswordComponent },
  { path: 'equipment/new-equipments', component: NewEquipmentsComponent, canActivate:[AuthGuard] },
  { 
    path: 'equipment', 
    component: EquipmentComponent, 
    canActivate:[AuthGuard],
    children:[
      { path: '', component: AllEquipmentComponent},
    ] 
  },
  { path: 'settings', component: SettingsComponent, canActivate:[AuthGuard] },
  { path: 'tickets/newtickets', component: NewTicketsComponent, canActivate:[AuthGuard] },
  { 
    path: 'tickets/ticket-id/:ticket_id', 
    component: TicketDetailsComponent,
    canActivate:[AuthGuard],
    children:[
      { path: '', redirectTo: 'details', pathMatch: 'full'},
      { path: 'details', component: DetailsComponent},
      { path: 'devices', component: DevicesComponent},
      { path: 'parts', component: PartsComponent},
      { path: 'timesheet', component: TimesheetComponent},
      { path: 'other-details', component: OtherDetailsComponent},
      { path: 'schedules', component: SchedulesComponent},
      { path: 'settings', component: DetailsSettingsComponent},
      { path: 'checklist', component: DetailsChecklistComponent},
    ] 
  },
  { 
    path: 'tickets', 
    component: TicketsComponent,
    canActivate:[AuthGuard],
    children:[
      { path: '', component: Last20Component}
     
    ]  
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
