import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departmentModel } from './departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // displays column names in department-table component
  displayedColumns: string[] = ['Department Name', 'Department Description', 'Delete'];
  // saves all departments from api call
  departments: departmentModel;
  // binds departments variable to render table in department-table.component
  dataSource: any;
  departmentName: string;
  departmentDescription: string;
  reqUrl: string = "http://localhost:3000/department/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) { 
  }

  getDepartments(): Observable<departmentModel>{
    return this.http.get<departmentModel>(`${this.reqUrl}`);
  }

  addDepartment(): Observable<departmentModel>{
    let newDepartment = new Object({
      depName: this.departmentName,
      depDescription: this.departmentDescription,
    })
    return this.http.post<departmentModel>(`${this.reqUrl}`, 
    JSON.stringify(newDepartment), 
    this.httpOptions);
  }

  removeDepartment(departmentID: string): Observable<string>{
    return this.http.delete<string>(this.reqUrl + departmentID);
  } 

};
