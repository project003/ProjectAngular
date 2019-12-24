import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentdashComponent } from "./studentdash/studentdash.component";
import { RouterModule, Routes } from "@angular/router";
import { ProfileComponent } from './profile/profile.component';
import { TimelineComponent } from './timeline/timeline.component';
import { FormsModule } from "@angular/forms";
import { ServiceService } from "app/shared/service.service";


const sturouting: Routes = [
  { path: "studash", component: StudentdashComponent },
  { path: "timeline", component: TimelineComponent },
  { path: "profile", component:ProfileComponent }

];

@NgModule({
  declarations: [StudentdashComponent, ProfileComponent, TimelineComponent],
  imports: [CommonModule,FormsModule, RouterModule.forChild(sturouting)],
  providers:[ServiceService]
})
export class StudentModule {}
