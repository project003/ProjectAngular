import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RoleComponent } from "./component/role/role.component";
import { DoctorModule } from "./module/doctor/doctor.module";
import { EmployeeModule } from "./module/employee/employee.module";
import { StudentModule } from "./module/student/student.module";
import { NurseModule } from "./module/nurse/nurse.module";
import { AdminModule } from "./module/admin/admin.module";


const routes: Routes = [
  { path: "", component: LoginComponent },
  // {
  //   path: "",
  //   component: AdminLayoutComponent,
  //   children: [
  //     {
  //       path: "",
  //       loadChildren:
  //         "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
  //     }
  //   ]
  // },
  {
    path: "role",
    component: RoleComponent,
    children: [
      {
        path: "doctor",
        loadChildren: () => DoctorModule
      },
      {
        path: "emp",
        loadChildren: () => EmployeeModule
      },
      {
        path: "student",
        loadChildren: () => StudentModule
      },
      {
        path: "nurse",
        loadChildren: () => NurseModule
      },
      {
        path: "admin",
        loadChildren: () => AdminModule
      }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
