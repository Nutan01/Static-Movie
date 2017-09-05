import { TestBed, inject } from '@angular/core/testing';
import { HttpModule,Http} from '@angular/http';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
             imports:[HttpModule],
      providers: [MovieService]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
