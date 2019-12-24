import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NursedashComponent } from "./nursedash/nursedash.component";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';

const nurserouting: Routes = [
  { path: "nursedash", component: NursedashComponent }
];
@NgModule({
  declarations: [NursedashComponent, ProfileComponent],
  imports: [CommonModule, RouterModule.forChild(nurserouting)]
})
export class NurseModule {}
