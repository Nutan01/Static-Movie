import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { MoviesComponent } from './movies.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import{ ApprouteModule } from '../approute/approute.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowHideService } from '../shared/show-hide.service';
import { MovieService } from '../shared/movie.service';
import { EditmovieComponent } from '../movies/editmovie/editmovie.component';
import { AddmovieComponent } from '../movies/addmovie/addmovie.component';
import { DeletemovieComponent } from '../movies/deletemovie/deletemovie.component';
import { SearchmoviePipe } from '../movies/searchmovie.pipe';
import { SortmoviePipe } from '../movies/sortmovie.pipe';
import { StarComponent } from '../star/star.component';
import {UserAuthenticationService, User} from '../user-authentication.service';
describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports:[HttpModule,FormsModule,ApprouteModule,RouterTestingModule,ReactiveFormsModule],
      declarations: [ MoviesComponent,LoginComponent ,AddmovieComponent,
      SearchmoviePipe,
      SortmoviePipe,
      StarComponent],
      providers:[ShowHideService,MovieService,UserAuthenticationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
