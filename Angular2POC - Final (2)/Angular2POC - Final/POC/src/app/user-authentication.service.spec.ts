import { TestBed, inject } from '@angular/core/testing';
import {Router} from '@angular/router';
import { UserAuthenticationService } from './user-authentication.service';

describe('UserAuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAuthenticationService,
       { 
        provide: Router, 
        useClass: class { navigate = jasmine.createSpy("navigate"); }
    } ]
    });
  });

  it('should be created', inject([UserAuthenticationService], (service: UserAuthenticationService) => {
    expect(service).toBeTruthy();
  }));
});
