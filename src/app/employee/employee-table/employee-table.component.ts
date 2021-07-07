import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

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

  

  deleteEmployee(employeeID){
    // api call
    console.log(employeeID);
    this.employeeService.deleteEmployee(employeeID).subscribe((res: any) => {
      this.getEmployees();
    });
  }

}
