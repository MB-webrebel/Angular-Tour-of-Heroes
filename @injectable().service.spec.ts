import { TestBed } from '@angular/core/testing';

import { @Injectable()Service } from './@injectable().service';

describe('@Injectable()Service', () => {
  let service: @Injectable()Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(@Injectable()Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
