import { TestBed } from '@angular/core/testing';

import { MediaSourceService } from './media-source-service';

describe('MediaSourceService', () => {
  let service: MediaSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
