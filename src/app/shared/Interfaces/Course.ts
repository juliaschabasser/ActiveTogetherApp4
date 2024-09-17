import { EventLocation } from "./EventLocation";

export interface Course {
    id: string;
    name: string;
    dates: [],
    instructor: string,
    eventLocationId: number
  }

  export interface CourseResponse {
    id: string;
    name: string;
    dates: [],
    instructor: string,
    eventLocationId: number,
    eventLocation: EventLocation
  }