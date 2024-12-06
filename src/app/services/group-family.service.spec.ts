import { TestBed } from '@angular/core/testing';

import { GroupFamilyService } from './group-family.service';

describe('GroupFamilyService', () => {
  let service: GroupFamilyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupFamilyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
