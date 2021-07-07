import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-dialog',
  templateUrl: './department-dialog.component.html',
  styleUrls: ['./department-dialog.component.css']
})
export class DepartmentDialogComponent implements OnInit {

  constructor(
    public departmentService: DepartmentService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getDepartments(){
    this.departmentService.getDepartments().subscribe( (res: any) => {
      this.departmentService.departments = res.result;
      this.departmentService.dataSource = this.departmentService.departments;
    })
  }

  submited(form: NgForm){
    
    if(form.valid){
      this.departmentService.addDepartment().subscribe(res => {
        this.getDepartments();
      })
    } else{
      alert('Form not valid')
    }
    this.dialog.closeAll();
  }

}
