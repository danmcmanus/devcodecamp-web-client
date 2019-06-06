import { InstructorsService } from './../../services/instructors.service';
import { Component, OnInit } from '@angular/core';
import { Instructor } from '../models/Instructor.model';

@Component({
  selector: 'app-instructors-list',
  templateUrl: './instructors-list.component.html',
  styleUrls: ['./instructors-list.component.sass']
})
export class InstructorsListComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(private instructorsService: InstructorsService) { }

  ngOnInit() {
    console.log('hi');
    this.loadInstructors();
  }

  loadInstructors() {
    this.instructorsService.getAllInstructors()
      .subscribe(response => this.instructors = response.body.instructors);
  }
}
