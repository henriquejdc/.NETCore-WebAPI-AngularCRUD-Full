import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ShowInspectionComponent } from './inspection/show-inspection/show-inspection.component';
import { AddEditInspectionComponent } from './inspection/add-edit-inspection/add-edit-inspection.component';
import { InspectionApiService } from './inspection-api.service';
import { AddEditStatusComponent } from './inspection/add-edit-status/add-edit-status.component';
import { AddEditInspectionTypesComponent } from './inspection/add-edit-inspection-types/add-edit-inspection-types.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectionComponent,
    ShowInspectionComponent,
    AddEditInspectionComponent,
    AddEditStatusComponent,
    AddEditInspectionTypesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InspectionApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }