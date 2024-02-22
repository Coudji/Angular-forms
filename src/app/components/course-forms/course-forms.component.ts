import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-course-forms',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './course-forms.component.html',
  styleUrl: './course-forms.component.css'
})
export class CourseFormsComponent {

  
  submit(form: NgForm){
    console.log(form);
  }
}
