import { TestBed } from '@angular/core/testing';

import { StudentMongoDataService } from './student-mongo-data.service';

describe('StudentMongoDataService', () => {
  let service: StudentMongoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentMongoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
