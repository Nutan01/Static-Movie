import { Pipe, PipeTransform } from '@angular/core';
import{Movie} from '../model/movie';

@Pipe({
  name: 'searchmovie'
})
export class SearchmoviePipe implements PipeTransform {

  transform(value: Movie[], filterBy?: string): Movie[] {
      filterBy=(filterBy)?filterBy.toLocaleLowerCase():null;
   return (filterBy)? value.filter((Movie:Movie)=>
   (Movie.title.toLocaleLowerCase().startsWith(filterBy))):value;
   
  }

}
