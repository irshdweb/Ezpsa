import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AllEquipmentComponent } from './equipment/all-equipment/all-equipment.component'
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { 
    path: 'equipment', 
    component: EquipmentComponent,
    children:[
      { path: '', component: AllEquipmentComponent, outlet: 'second' },
    ] 
  },
  { path: 'settings', component: SettingsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
