import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DepartmentDialogComponent } from '../department-dialog/department-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialog.open(DepartmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('executes after dialog close')
    });
  }



}
