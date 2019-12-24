import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdmindashComponent } from "./admindash/admindash.component";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

const adminrouting: Routes = [
  { path: "admindash", component: AdmindashComponent }
];
@NgModule({
  declarations: [AdmindashComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(adminrouting)]
})
export class AdminModule {}
