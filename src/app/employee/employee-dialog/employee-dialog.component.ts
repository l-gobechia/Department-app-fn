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

  constructor(public employeeService: EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getEmployees(){
    this.employeeService.departmentSelected = true;
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.employeeService.employee = res.result;
      this.employeeService.dataSource = this.employeeService.employee;
    }, (err) => {
      console.log(err.error.errorMesseage);
    })
  };

  submited(form: NgForm){
    if(form.valid){
      this.employeeService.addEmployee().subscribe((res: any) => {
        this.getEmployees();
        this.dialog.closeAll();
      });
    }
  }

}
