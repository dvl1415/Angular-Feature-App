import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSqlDataComponent } from './student-sql-data.component';

describe('StudentSqlDataComponent', () => {
  let component: StudentSqlDataComponent;
  let fixture: ComponentFixture<StudentSqlDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentSqlDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSqlDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
