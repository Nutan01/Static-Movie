import { Component, OnInit ,OnChanges,DoCheck , ChangeDetectorRef } from '@angular/core';
import { MovieService} from '../shared/movie.service';
import { ShowHideService } from '../shared/show-hide.service';
import { UserAuthenticationService ,User} from 'app/user-authentication.service';
import { Router } from '@angular/router'; 
import { Movie } from '../model/movie';
//import { User } from '../model/user';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit,OnChanges ,DoCheck{
user=new User("","");
 currentUser;
 movie:Movie[]; 
 editId:number;
  deleteId:number;
 idPassed:boolean=false;
 idPasse:boolean=false;
 isDesc: boolean = false;
 column: string = ' ';
 direction: number;
 searchFilter:string;
 selectedRow : Number;
showEdit:boolean;
 movieModel: any = {};
 movieModel1: any = {};
 myValue:number;
 myValues:number;
  constructor(
            private router: Router, 
            private showHideService:ShowHideService, 
            private movieService:MovieService,
             private userService:UserAuthenticationService,
           private cd: ChangeDetectorRef
  ) {
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     this.currentUser = JSON.parse(localStorage.getItem('user'));
   }

  ngOnInit() {
  this.userService.checkCredentials(User);
    this.getMovies();
    //this.movieService.getMovie().then(response=>{this.movie=response; }  );
   // console.log(this.movie);
  
  }
setUsername(){
 this.user.username="Nutan";
   this.currentUser.username=this.user.username;
   return this.currentUser.username;
}
  ngDoCheck() {
   //this.movieService.getMovie().then(response=>{this.movie=response;});
 }
 ngOnChanges() {
 // this.movieService.getMovie().then(response=>{this.movie=response;});
 }

// movieGet(value){
//   this.movie=value;
//   //this.movieService.getMovie().then(response=>{this.movie=response;});
// }
 

        showingLogOut:boolean= this.showHideService.showingLogOut;
        showingLogin:boolean=   this.showHideService.showingLogin;
         showingMovie:boolean=true;
  
  setMovieEditid(id:number,idx:number){
    this.editId=null;
    this.editId=id;
    this.idPassed=true;
    this.myValue=idx;
    console.log("set"+this.editId);
     console.log("set index"+this.myValue);
    this.movieService.setEditId(this.editId);

     this.movieService.getMovieById().then(response=>{this.movieModel=response; console.log("get by id"+this.movieModel);});
    
   this.showEdit=true;
  }
  
  setMovieDeleteid(id:number,idx:number){
    this.deleteId=null;
    this.deleteId=id;
    this.idPasse=true;
    this.myValues=idx;
    this.movieService.setDeleteId(this.deleteId);
   
    }
          

   // Change sort function to this: 
    sort(property){
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    }

    setClickedRow(index,mov){
      //this.movie.reverse();
           this.selectedRow = index;
           this.movie.splice(index,1);
           this.movie.unshift(mov);
           this.selectedRow=0;
       }

    // addMovies() {
    //             console.log(this.movieModel1);
    //             if(this.movieModel1!=null){
    //               this.movieService.setBody(this.movieModel1)
    //             this.movieService.postMovie();
    //           console.log(this.movieModel1);}
    //             // this.movieModel1={};
              
    //     }


        editMovies() {
             console.log("edit");
           if(this.movieModel!=null){
              console.log(this.movieModel);
              this.movieService.setBody(this.movieModel)
              this.movieService.putMovieById().then(() => { this.getMovies() });
              let k =this.myValue;
              for(let i=0; i<this.movie.length;i++){
              if(i==k){
              this.movie[i]=this.movieModel;
            }
              }
           
              this.movieModel={};
            }
             this.showEdit=false;
           
    }


    deleteMovie() {
            this.movieService.deleteMovieById().then(() => { this.getMovies() });
           this.movie.splice(this.myValues,1);
    }

    getMovies(){
         this.movieService.getMovie().then(response=>{this.movie=response; }  );
    }
}
