import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.css']
})
export class DepartmentTableComponent implements OnInit {

  constructor(public departmentService: DepartmentService) { }

  ngOnInit(): void {
  }

}
