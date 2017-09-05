import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgForm} from '@angular/forms'; 
import { ModalModule } from 'ngx-bootstrap';
import { HttpModule } from '@angular/http';
import{ ApprouteModule } from './approute/approute.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import{ApprouteRoutingModule} from './approute/approute-routing.module';
import {UserAuthenticationService, User} from './user-authentication.service';
import { ShowHideService } from './shared/show-hide.service'; 
import { MovieService } from './shared/movie.service'; 
import { AuthenticateService } from './shared/authenticate.service'; 
// used to create fake backend

import { BaseRequestOptions } from '@angular/http';

import { StarComponent } from './star/star.component';
import { MoviesComponent } from './movies/movies.component';
import { AddmovieComponent } from './movies/addmovie/addmovie.component';
import { EditmovieComponent } from './movies/editmovie/editmovie.component';
import { DeletemovieComponent } from './movies/deletemovie/deletemovie.component';
import { SearchmoviePipe } from './movies/searchmovie.pipe';
import { SortmoviePipe } from './movies/sortmovie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StarComponent,
    MoviesComponent,
    AddmovieComponent,
    EditmovieComponent,
    DeletemovieComponent,
    SearchmoviePipe,
    SortmoviePipe
      ],
  imports: [
    BrowserModule,
    FormsModule,
    ApprouteModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    HttpModule,
    ApprouteRoutingModule
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    UserAuthenticationService,
    AuthenticateService,
     // providers used to create fake backend
       
        BaseRequestOptions,
        ShowHideService,
        MovieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
