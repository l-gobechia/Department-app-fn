import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DepartmentDialogComponent } from '../department/department-dialog/department-dialog.component';
import { EmployeeService } from '../employee.service';
import { EmployeeDialogComponent } from '../employee/employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  openDepartmentDialog(){
    const dialogRef = this.dialog.open(DepartmentDialogComponent);
  }

  openEmployeeDialog(){
    const dialogRef = this.dialog.open(EmployeeDialogComponent);
  }

  goToDepartments(){
    this.employeeService.departmentSelected = false;
  }

}
