import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { DepartmentService } from '../../department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  constructor(public departmentService: DepartmentService, public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getDepartments()
  }

  getDepartments() {
    this.departmentService.getDepartments().subscribe((res: any) => {
      this.departmentService.departments = res.result;
      this.departmentService.dataSource = this.departmentService.departments;
    });
  }

  removeDepartment(departmentID: string){
    this.departmentService.removeDepartment(departmentID).subscribe((res: any) => {
      this.getDepartments();
    });
  }

  getEmployeesWithDepID(departmentID: string){
    this.employeeService.departmentID = departmentID;
    this.employeeService.departmentSelected = true;
    this.employeeService.getEmployees().subscribe((res: any) => {
      this.employeeService.employee = res.result;
      this.employeeService.dataSource = this.employeeService.employee;
      console.log(123);
      console.log(this.employeeService.employee);

    }, (err) => {
      console.log(err.error.errorMesseage);
    })
  }

};
