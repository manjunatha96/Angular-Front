import { TestBed } from '@angular/core/testing';

import { FileuploadsService } from './fileuploads.service';

describe('FileuploadsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileuploadsService = TestBed.get(FileuploadsService);
    expect(service).toBeTruthy();
  });
});
