import { TestBed, inject,ComponentFixture } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { ShowHideService } from './show-hide.service';

describe('ShowHideService', () => {
   let comp:    ShowHideService;
  let fixture: ComponentFixture<ShowHideService>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
      comp=new ShowHideService();
    TestBed.configureTestingModule({
      providers: [ShowHideService]
    });
  });

// should be created
  it('should be created', inject([ShowHideService], (service: ShowHideService) => {
    expect(service).toBeTruthy();
  }));

// should be show instances
    it('should be show login true', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingLogin).toBeTruthy();
  }));

   it('should be show logout false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingLogOut).toBeFalsy();
  }));
  
 it('should be show movie false', inject([ShowHideService], (service: ShowHideService) => {
    expect(service.showingMovie).toBeFalsy();
  }));

// should be set instances
   it('should be setlogin false', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogin(false);
    expect(comp.showingLogin).toBeFalsy();
  }));

 it('should be setlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogout(true);
    expect(comp.showingLogOut).toBeTruthy();
  }));

   it('should be setmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMovie(true);
    expect(comp.showingMovie).toBeTruthy();
  }));


// should be get instances
   it('should be getlogin true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getShowingLogin();
    expect(comp.showingLogin).toBeTruthy();
  }));

 it('should be getlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getShowingLogout();
    expect(comp.showingLogOut).toBeFalsy();
  }));

   it('should be getmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.getshowingMovie();
    expect(comp.showingMovie).toBeFalsy();
  }));

// should be set and get instances
 it('should be setgetlogin  false', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogin(false);
     comp.getShowingLogin();
    expect(comp.showingLogin).toBeFalsy();
  }));

 it('should be setgetlogout true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setShowingLogout(true);
     comp.getShowingLogout();
    expect(comp.showingLogOut).toBeTruthy();
  }));

   it('should be setgetmovie true', inject([ShowHideService], (service: ShowHideService) => {
     comp.setshowingMovie(true);
     comp.getshowingMovie();
    expect(comp.showingMovie).toBeTruthy();
  }));
});
