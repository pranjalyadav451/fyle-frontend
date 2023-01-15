import { TestBed } from '@angular/core/testing';

import { RepoLanguageDetailsService } from './repo-language-details.service';

describe('RepoLanguageDetailsService', () => {
  let service: RepoLanguageDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoLanguageDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
