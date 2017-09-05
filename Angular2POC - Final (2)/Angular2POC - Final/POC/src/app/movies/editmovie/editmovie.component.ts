import { Component, OnInit,Input,OnChanges ,EventEmitter,Output} from '@angular/core';
import { MovieService} from 'app/shared/movie.service';
import { Movie } from 'app/model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit,OnChanges {

movieModel: any = {};

 @Input() ids:number;

 @Output() movies= new EventEmitter<Movie>();
 //mov :any={}; 
  //mov :Movie; 
   mov :Movie[]; 
  constructor(
      private movieService:MovieService,
      private router:Router
  ) { }

  ngOnInit() {
    //this.movieService.setId(this.id);
    this.movieService.getMovieById().then(response=>{this.movieModel=response;});
    this.movieModel={};
    }

 ngOnChanges() {
    this.movieService.getMovieById().then(response=>{this.movieModel=response;});
    }

    editMovies() {
             console.log("edit");
           if(this.movieModel!=null){
            this.movieService.setBody(this.movieModel)
            this.movieService.putMovieById().then(() => { this.getMovies() });
          
            //this.movieModel={};
           // this.router.navigate(['/movie']);
                  
            // this.getMovies();
            //console.log(this.mov);
        // this.movies.emit(this.mov);
          }
           
    }

    getMovies(){
           this.movieService.getMovie().then(response=>{this.mov=response;  console.log("invdfgbdf"+this.mov);});
           console.log("in"+this.mov);
    }
}
