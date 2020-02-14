import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { EquipmentsidebarComponent } from './equipmentsidebar/equipmentsidebar.component';
import { AllEquipmentComponent } from './equipment/all-equipment/all-equipment.component';
import { AddEquipmentComponent } from './modals/add-equipment/add-equipment.component';
import { AddSearchComponent } from './modals/add-search/add-search.component';
import { ColumnSettingsComponent } from './modals/column-settings/column-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { TicketsComponent } from './tickets/tickets.component';
import { TicketsidebarComponent } from './tickets/ticketsidebar/ticketsidebar.component';
import { Last20Component } from './tickets/last20/last20.component';
import { EllipsisPipe } from './tickets/last20/ellipsis.pipe';
import { TicketFillterComponent } from './modals/ticket-fillter/ticket-fillter.component';
import { NewTicketsComponent } from './tickets/new-tickets/new-tickets.component';
import { DragDirective } from './tickets/drag.directive';
import { QuillModule } from 'ngx-quill';
import { HourPipe } from './tickets/new-tickets/hour.pipe';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NewEquipmentsComponent } from './equipment/new-equipments/new-equipments.component';
import { CookieService } from 'ngx-cookie-service';
import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details.component';
import { ToastrModule } from 'ngx-toastr';
import { DetailsComponent } from './tickets/ticket-details/details/details.component';
import { DevicesComponent } from './tickets/ticket-details/devices/devices.component';
import { PartsComponent } from './tickets/ticket-details/parts/parts.component';
import { TimesheetComponent } from './tickets/ticket-details/timesheet/timesheet.component';
import { OtherDetailsComponent } from './tickets/ticket-details/other-details/other-details.component';
import { SchedulesComponent } from './tickets/ticket-details/schedules/schedules.component';
import { DetailsSettingsComponent } from './tickets/ticket-details/details-settings/details-settings.component';
import { DetailsChecklistComponent } from './tickets/ticket-details/details-checklist/details-checklist.component';
import { DetailSideBarComponent } from './tickets/ticket-details/detail-side-bar/detail-side-bar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';


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
    ColumnSettingsComponent,
    SettingsComponent,
    TicketsComponent,
    TicketsidebarComponent,
    Last20Component,
    EllipsisPipe,
    TicketFillterComponent,
    NewTicketsComponent,
    DragDirective,
    HourPipe,
    NewEquipmentsComponent,
    TicketDetailsComponent,
    DetailsComponent,
    DevicesComponent,
    PartsComponent,
    TimesheetComponent,
    OtherDetailsComponent,
    SchedulesComponent,
    DetailsSettingsComponent,
    DetailsChecklistComponent,
    DetailSideBarComponent,
    ResetPasswordComponent,
    CreatePasswordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgxPaginationModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NgSelectModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [CookieService, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
