import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmployeedashComponent } from "./employeedash/employeedash.component";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

const emproutting: Routes = [
  { path: "empdash", component: EmployeedashComponent }
];

@NgModule({
  declarations: [EmployeedashComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(emproutting)]
})
export class EmployeeModule {}
