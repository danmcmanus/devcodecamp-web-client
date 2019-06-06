import { AddInstructorRequest } from './models/AddInstructorRequest';
import { InstructorsService } from './../../services/instructors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-instructor',
  templateUrl: './add-instructor.component.html',
  styleUrls: ['./add-instructor.component.sass']
})
export class AddInstructorComponent implements OnInit {
  imageUrl = '../../../assets/img/placeholder_other.png';
  fileToUpload: File = null;

  constructor(private instructorService: InstructorsService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      console.log(this.imageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(firstName, lastName, file: File) {
    const request = new AddInstructorRequest();
    request.firstName = firstName.value;
    request.lastName = lastName.value;
    request.image = this.imageUrl;
    this.instructorService.addInstructor(request)
      .subscribe(x => console.log(x));
  }
}
