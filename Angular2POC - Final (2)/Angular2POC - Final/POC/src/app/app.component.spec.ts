import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import{ ApprouteModule } from './approute/approute.module';
import { LoginComponent } from './login/login.component';
import { ShowHideService} from './shared/show-hide.service';
import { TestBed, async ,ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { EditmovieComponent } from './movies/editmovie/editmovie.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { DeletemovieComponent } from './movies/deletemovie/deletemovie.component';
import { SearchmoviePipe } from './movies/searchmovie.pipe';
import { SortmoviePipe } from './movies/sortmovie.pipe';
import { StarComponent } from './star/star.component';

describe('AppComponent', () => {
 let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule,FormsModule,ApprouteModule,RouterTestingModule,ReactiveFormsModule],
      declarations: [
        AppComponent,
        LoginComponent,
        MoviesComponent,AddmovieComponent
        ,EditmovieComponent,DeletemovieComponent,SearchmoviePipe,SortmoviePipe
        ,StarComponent
            ],
      providers:[ShowHideService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  // }));
});
