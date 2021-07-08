import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentTableComponent } from './department/department-table/department-table.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';

const routes: Routes = [
  {
    path: "",
    component: DepartmentTableComponent
  },
  {
    path: "department",
    component: EmployeeTableComponent
  },
  {
    path: '**',
    component: DepartmentTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
