import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { DepartmentTableComponent } from './department-table/department-table.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DepartmentDialogComponent } from './department-dialog/department-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentTableComponent,
    DepartmentDialogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
