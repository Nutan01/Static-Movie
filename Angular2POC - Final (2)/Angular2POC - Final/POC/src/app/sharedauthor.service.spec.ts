import { TestBed, inject } from '@angular/core/testing';

import { SharedauthorService } from './sharedauthor.service';

describe('SharedauthorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedauthorService]
    });
  });

  it('should be created', inject([SharedauthorService], (service: SharedauthorService) => {
    expect(service).toBeTruthy();
  }));
});
