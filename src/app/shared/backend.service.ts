import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoreService } from './store.service';
import { CourseResponse } from './Interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient, private storeService: StoreService) { }

  public getCourses() {
    this.http.get<CourseResponse[]>('http://localhost:5000/courses?_expand=eventLocation').subscribe(data => {
      this.storeService.courses = data;
    });
  }
}
