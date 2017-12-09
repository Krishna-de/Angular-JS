import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  
  categoryOptions = [
    { id: 1, name:'Development' },
    { id: 2, name:'ART' },
    { id: 3, name:'Languages' }
  ];
  
  submit(x) { 
      console.log(x); 
    }
}
