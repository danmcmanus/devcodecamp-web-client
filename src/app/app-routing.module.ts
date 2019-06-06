import { AddInstructorComponent } from './instructors/add-instructor/add-instructor.component';
import { InstructorsListComponent } from './instructors/instructors-list/instructors-list.component';
import { InstructorDetailComponent } from './instructors/instructor-detail/instructor-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: InstructorsListComponent },
  { path: 'details:id', component: InstructorDetailComponent },
  { path: 'add', component: AddInstructorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
