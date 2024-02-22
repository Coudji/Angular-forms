import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from './components/template-forms/template/template.component';
import { ReactiveComponent } from './components/reactive-forms/reactive/reactive.component';
import { CourseFormsComponent } from './components/course-forms/course-forms.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateComponent,ReactiveComponent,CourseFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';
}
