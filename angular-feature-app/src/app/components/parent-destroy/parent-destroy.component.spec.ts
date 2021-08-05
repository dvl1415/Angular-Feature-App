import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDestroyComponent } from './parent-destroy.component';

describe('ParentDestroyComponent', () => {
  let component: ParentDestroyComponent;
  let fixture: ComponentFixture<ParentDestroyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentDestroyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDestroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
