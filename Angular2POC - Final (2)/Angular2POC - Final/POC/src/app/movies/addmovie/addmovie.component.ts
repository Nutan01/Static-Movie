import { Component, OnInit } from '@angular/core';
import { MovieService} from 'app/shared/movie.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

 movieModels: any = {};
userForm:FormGroup;

  constructor(
    private movieService:MovieService,
    private _formBuilder:FormBuilder
  ) { }

  ngOnInit() {
     this.userForm= this._formBuilder.group({
             title:[null,[Validators.required]],
             rating:[null,[Validators.required]]
            
      });
  }

   addMovies() {
            console.log(this.movieModels);
            if(this.movieModels!=null){
               this.movieService.setBody(this.movieModels)
            this.movieService.postMovie();
           console.log(this.movieModels);}
           
    }

}
