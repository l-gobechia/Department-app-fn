import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from './employeeModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: EmployeeModel[];
  dataSource: any;
  // generates UI 
  departmentSelected: boolean = false;
  displayedColumns: string[] = ['Name', 'Email', 'Age', 'Position', 'Delete'];
  reqUrl: string = environment.api;
  departmentID: string;
  employeeName: string;
  employeeEmail: string;
  employeeAge: number;
  employeePosition: string;
  employeeID: string;
  selectedDepartmentName: string;
  displayEmptyEmployeeList: boolean = false;

  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {
    this.departmentID = localStorage.getItem('departmentID');
    this.selectedDepartmentName = localStorage.getItem('departmentName');
  }  

  getEmployees(): Observable<EmployeeModel>{
    return this.http.get<EmployeeModel>(`${environment.api}department/${this.departmentID}/employee`);
  }

  deleteEmployee(employeeID: string): Observable<string> {
    return this.http.delete<string>(`${this.reqUrl}employee/${employeeID}`)
  }

  addEmployee(): Observable<EmployeeModel>{
    let newEmployee = new Object({
      departmentID: this.departmentID,
      employeeName: this.employeeName,
      employeeEmail: this.employeeEmail,
      employeeAge: this.employeeAge,
      employeePosition: this.employeePosition,
    });
    return this.http.post<EmployeeModel>(`${this.reqUrl}employee/`, JSON.stringify(newEmployee), this.httpOptions);
  }

}
