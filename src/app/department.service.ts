import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { departmentModel } from './departmentModel';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  // displays column names in department-table component
  displayedColumns: string[] = ['Department Name', 'Department Description'];
  departmentName: string;
  departmentDescription: string;
  reqUrl: string = "http://localhost:3000/department/";

  // httpOptions = {
  //   headers: new HttpHeaders({ "Content-Type": "application/json" }),
  // };

  departmentData: departmentModel;
  // dataSource:any;
 
  

 
  constructor(private http: HttpClient) { 
    // this.dataSource = this.departmentData;
    // console.log('this.dataSource  :>> ', this.dataSource );
    console.log(' this.departmentData  :>> ',  this.departmentData );
  }

  getDepartments(): Observable<departmentModel>{
    return this.http.get<departmentModel>(`${this.reqUrl}`);
  }


}
