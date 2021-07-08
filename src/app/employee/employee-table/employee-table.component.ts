import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/department.service';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(public employeeService: EmployeeService, public departmentService: DepartmentService) { 
    
  }

  ngOnInit(): void {
    this.getEmployees();
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
  }
  

  deleteEmployee(employeeID){
    this.employeeService.deleteEmployee(employeeID).subscribe((res: any) => {
      this.getEmployees();
    });
  }

}
