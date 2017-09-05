import { Component, OnInit ,Input} from '@angular/core';
import { MovieService} from 'app/shared/movie.service';

@Component({
  selector: 'app-deletemovie',
  templateUrl: './deletemovie.component.html',
  styleUrls: ['./deletemovie.component.css']
})
export class DeletemovieComponent implements OnInit {

@Input() ids:number;

  constructor(
     private movieService:MovieService
  ) { }

  ngOnInit() {
  }

 deleteMovie() {
             this.movieService.deleteMovieById();
    }

}
