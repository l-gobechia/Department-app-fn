import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { DepartmentTableComponent } from './department/department-table/department-table.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DepartmentDialogComponent } from './department/department-dialog/department-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeDialogComponent } from './employee/employee-dialog/employee-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentTableComponent,
    DepartmentDialogComponent,
    EmployeeTableComponent,
    EmployeeDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
