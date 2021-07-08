import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent implements OnInit {

  employeeEmailErrorMsg: string;

  constructor(public employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getEmployees(){
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
  };

  submited(form: NgForm){
    if(form.valid){
      this.employeeService.addEmployee().subscribe((res: any) => {
        this.getEmployees();
        this.employeeService.employeeName = '';
        this.employeeService.employeeEmail = '';
        this.employeeService.employeeAge = undefined;
        this.employeeService.employeePosition = '';
        this.dialog.closeAll();
      }, err => {
        this.employeeEmailErrorMsg = err.error.errorMesseage;
      });
    }
  }

}
