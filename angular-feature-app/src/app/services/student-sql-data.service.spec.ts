import { TestBed } from '@angular/core/testing';

import { StudentSqlDataService } from './student-sql-data.service';

describe('StudentSqlDataService', () => {
  let service: StudentSqlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSqlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
