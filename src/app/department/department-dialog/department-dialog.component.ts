import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/employee.service';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-department-dialog',
  templateUrl: './department-dialog.component.html',
  styleUrls: ['./department-dialog.component.css']
})
export class DepartmentDialogComponent implements OnInit {

  sameDepartmentNameErrorMsg: string;

  constructor(
    public departmentService: DepartmentService,
    public dialog: MatDialog,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getDepartments(){
    this.employeeService.departmentSelected = false;
    this.departmentService.getDepartments().subscribe( (res: any) => {
      this.departmentService.departments = res.result;
      this.departmentService.dataSource = this.departmentService.departments;
    })
  }

  submited(form: NgForm){

    if(form.valid){
      this.departmentService.addDepartment().subscribe(res => {
        this.getDepartments();
        this.departmentService.departmentName = '';
        this.departmentService.departmentDescription = '';
        this.dialog.closeAll();
      }, (err) => {
        this.sameDepartmentNameErrorMsg = err.error.errorMesseage;
      });
      
    } 
  }

}
