import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFormsComponent } from './course-forms.component';

describe('CourseFormsComponent', () => {
  let component: CourseFormsComponent;
  let fixture: ComponentFixture<CourseFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
