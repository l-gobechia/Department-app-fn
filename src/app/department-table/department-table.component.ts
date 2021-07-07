import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { departmentModel } from '../departmentModel';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  dataSource: any;

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getDepartments()
  }
  getDepartments() {
    this,this.departmentService.getDepartments().subscribe((res: any) => {
      console.log(123);
      // console.log(res);
      // this.departmentService.departmentData.push(res.result.departmentName);
  
      this.departmentService.departmentData = res.result;
      this.dataSource = this.departmentService.departmentData;
          console.log(this.departmentService.departmentData);
    })
  }

}
