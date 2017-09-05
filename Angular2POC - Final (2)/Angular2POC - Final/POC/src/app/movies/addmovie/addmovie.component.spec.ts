import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { MoviesComponent } from '../movies.component';
import { LoginComponent } from 'app/login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ ApprouteModule } from 'app/approute/approute.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowHideService } from 'app/shared/show-hide.service';
import { MovieService } from 'app/shared/movie.service';
import { EditmovieComponent } from 'app/movies/editmovie/editmovie.component';

import { DeletemovieComponent } from 'app/movies/deletemovie/deletemovie.component';
import { SearchmoviePipe } from 'app/movies/searchmovie.pipe';
import { SortmoviePipe } from 'app/movies/sortmovie.pipe';
import { StarComponent } from 'app/star/star.component';
import { AddmovieComponent } from './addmovie.component';

describe('AddmovieComponent', () => {
  let component: AddmovieComponent;
  let fixture: ComponentFixture<AddmovieComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule,ApprouteModule,RouterTestingModule,ReactiveFormsModule],
      declarations: [ MoviesComponent,LoginComponent ,AddmovieComponent,
      SearchmoviePipe,
      SortmoviePipe,
      StarComponent],
      providers:[ShowHideService,MovieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
