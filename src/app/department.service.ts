import { Injectable } from '@angular/core';
import { departmentModel } from './departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departmentData: departmentModel[] = [
    {departmentName: 'Department 1', departmentDescription: 'Department One Description!'},
    {departmentName: 'Department 2', departmentDescription: 'Department Two Description!'},
  ];
  
  displayedColumns: string[] = ['Department Name', 'Department Description'];
  dataSource: any = this.departmentData;
 
  constructor() { 
  }

}
