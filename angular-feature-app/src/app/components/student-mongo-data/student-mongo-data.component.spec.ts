import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMongoDataComponent } from './student-mongo-data.component';

describe('StudentMongoDataComponent', () => {
  let component: StudentMongoDataComponent;
  let fixture: ComponentFixture<StudentMongoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMongoDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMongoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
