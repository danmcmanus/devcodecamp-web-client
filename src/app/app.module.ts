import { InstructorsListComponent } from './instructors/instructors-list/instructors-list.component';
import { InstructorDetailComponent } from './instructors/instructor-detail/instructor-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInstructorComponent } from './instructors/add-instructor/add-instructor.component';
import { HttpClientModule } from '@angular/common/http';
import { InstructorsService } from './services/instructors.service';

@NgModule({
   declarations: [
      AppComponent,
      AddInstructorComponent,
      InstructorDetailComponent,
      InstructorsListComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [InstructorsService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
