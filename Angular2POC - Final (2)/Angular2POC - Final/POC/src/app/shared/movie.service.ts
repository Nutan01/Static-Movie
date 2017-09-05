import { Injectable } from '@angular/core';
import {Headers,Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MovieService {

 constructor(private http:Http) { }
  
  private headers = new Headers({'content-Type' : 'application/json'});

  path :string= "http://localhost:3000/movies";

  editPath:string="http://localhost:3000/movies/";
  
  body :any= null;

  ide:number=null;

  id:number=null;

  setBody(body:any):void {
      this.body=body;
  }
  
  setEditId(ide:number):void {
         this.ide= ide;
    }

    setDeleteId(id:number):void {
            this.id= id;
    }

  // private handleError(error: any): Promise<any> {
  //     console.error('An error occurred', error); // for demo purposes only
  //     return Promise.reject(error.message || error);
  //   }
  
  getMovie() : Promise<any> {
      return this.http.get("http://localhost:50889/api/Movie/getMovie")
                 .toPromise()
                 .then((response) => response.json() || null);
                // .catch(this.handleError);
  }
 
 postMovie() : Promise<any> {
     return this.http.post("http://localhost:50889/api/Movie/addMovie",this.body, {headers:this.headers})
                 .toPromise()
                 .then(response => response.json());
                // .catch(this.handleError);
  }
 
  getMovieById() : Promise<any> {
         return this.http.get("http://localhost:50889/api/Movie/getMovieById?id="+ this.ide)
                 .toPromise()
                 .then(response => response.json());
                // .catch(this.handleError);
  }

   putMovieById() : Promise<any> {
     return this.http.put("http://localhost:50889/api/Movie/editMovie?id="+ this.ide, this.body, {headers:this.headers})
                 .toPromise()
                 .then(response => response.json());
                // .catch(this.handleError);
                
  }

   deleteMovieById() : Promise<any> {
         return this.http.delete("http://localhost:50889/api/Movie/deleteMovie?id="+ this.id)
                 .toPromise()
                 .then(response => response.json());
                // .catch(this.handleError);
  }


}
