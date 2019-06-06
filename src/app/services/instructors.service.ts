import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AddInstructorRequest } from '../instructors/add-instructor/models/AddInstructorRequest';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { GetInstructorsResponse } from '../instructors/models/GetInstructorsResponse.model';
import { Instructor } from '../instructors/models/Instructor.model';

@Injectable({
  providedIn: 'root'
})
export class InstructorsService {
  resource = 'instructors';

  constructor(private http: HttpClient) { }

  getAllInstructors(): Observable<HttpResponse<GetInstructorsResponse>> {
    return this.http.get<GetInstructorsResponse>(`${environment.baseApiUrl}${this.resource}`, {observe: 'response'});
  }

  addInstructor(request: AddInstructorRequest): Observable<HttpResponse<Instructor>> {
    return this.http.post<Instructor>(`${environment.baseApiUrl}${this.resource}`, request, { observe: 'response' });
  }

}
