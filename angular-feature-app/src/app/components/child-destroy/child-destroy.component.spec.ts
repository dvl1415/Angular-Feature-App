import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDestroyComponent } from './child-destroy.component';

describe('ChildDestroyComponent', () => {
  let component: ChildDestroyComponent;
  let fixture: ComponentFixture<ChildDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
