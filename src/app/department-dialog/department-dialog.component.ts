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

  submited(form: NgForm){
    this.dialog.closeAll();
    console.log(form.value);
  }
  
}
