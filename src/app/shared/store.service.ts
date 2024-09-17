import { Injectable } from '@angular/core';
import { Course } from './Interfaces/Course';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public courses: Course[] = [];
}
