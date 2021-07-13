import { TestBed } from '@angular/core/testing';

import { ListmemberService } from './listmember.service';

describe('ListmemberService', () => {
  let service: ListmemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListmemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
