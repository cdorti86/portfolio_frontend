import { TestBed } from '@angular/core/testing';

import { AcerdeDeService } from './acerde-de.service';

describe('AcerdeDeService', () => {
  let service: AcerdeDeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcerdeDeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
