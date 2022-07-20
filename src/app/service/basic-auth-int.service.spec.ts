import { TestBed } from '@angular/core/testing';

import { BasicAuthIntService } from './basic-auth-int.service';

describe('BasicAuthIntService', () => {
  let service: BasicAuthIntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthIntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
