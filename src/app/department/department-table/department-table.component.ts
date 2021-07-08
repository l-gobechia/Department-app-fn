import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { DepartmentService } from '../../department.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})

export class DepartmentTableComponent implements OnInit {

  // durationInSeconds = 3;
  // displayEmptyEmployeeList: boolean = false;

  constructor(
    public departmentService: DepartmentService, 
    public employeeService: EmployeeService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  getDepartments() {
    this.employeeService.departmentSelected = false;
    this.departmentService.getDepartments().subscribe((res: any) => {
      this.departmentService.departments = res.result;
      this.departmentService.dataSource = this.departmentService.departments;
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  removeDepartment(departmentID: string){
    this.departmentService.removeDepartment(departmentID).subscribe((res: any) => {
      this.getDepartments();
    }, (err) => {
      this.openSnackBar(err.error.errorMesseage, 'Close!');
    });
  }

  getEmployeesWithDepID(departmentID: string, selectedDepartmentName: string){
    this.employeeService.selectedDepartmentName = selectedDepartmentName;
    this.employeeService.departmentID = departmentID;
    localStorage.setItem('departmentID', departmentID);
    localStorage.setItem('departmentName', selectedDepartmentName);
    this.employeeService.departmentSelected = true;
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.employeeService.employee = res.result;
      this.employeeService.dataSource = this.employeeService.employee;

      if(this.employeeService.employee.length === 0){
        this.employeeService.displayEmptyEmployeeList = true;
      }else{
        this.employeeService.displayEmptyEmployeeList = false;
      }

    }, (err) => {
      console.log(err.error.errorMesseage);
    })
  }

};
