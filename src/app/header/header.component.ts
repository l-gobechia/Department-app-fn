import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { DepartmentDialogComponent } from '../department/department-dialog/department-dialog.component';
import { EmployeeService } from '../employee.service';
import { EmployeeDialogComponent } from '../employee/employee-dialog/employee-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    public employeeService: EmployeeService,
    private departmentService: DepartmentService,
    public router: Router) { }

  ngOnInit(): void {
    this.checkRouter();
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

  getEmployees(){
    this.employeeService.departmentSelected = true;
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.employeeService.employee = res.result;
      this.employeeService.dataSource = this.employeeService.employee;
      if(this.employeeService.employee.length === 0){
        this.employeeService.displayEmptyEmployeeList = true;
      }
    }, (err) => {
      console.log(err.error.errorMesseage);
    })
  };

  getDepartments() {
    this.employeeService.departmentSelected = false;
    console.log('deoart :>> ');
    this.departmentService.getDepartments().subscribe((res: any) => {
      this.departmentService.departments = res.result;
      this.departmentService.dataSource = this.departmentService.departments;
    });
  }

  checkRouter(){
    console.log('this.router.url :>> ', this.router.url);

    if (this.router.url === '/department'){
      this.employeeService.departmentSelected = true;
      this.getEmployees();
    } else if (this.router.url === '' || '/' ){
      this.employeeService.departmentSelected = false;
      this.getDepartments();
    }
  }

}
