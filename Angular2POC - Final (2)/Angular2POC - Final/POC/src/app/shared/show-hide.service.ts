import { Injectable } from '@angular/core';

@Injectable()
export class ShowHideService {
    
    showingMovie:boolean=   false;
    showingLogOut:boolean= false;
    showingLogin:boolean=   true;
    
    setshowingMovie(showingMovie:boolean):void {
        this.showingMovie = showingMovie;
    }
  
    setShowingLogin(showingLogin:boolean):void {
        this.showingLogin = showingLogin;
    }
     setShowingLogout(showingLogOut:boolean):void {
        this.showingLogOut = showingLogOut;
    }
       
    getshowingMovie():boolean {
        return this.showingMovie;
    }
    
    getShowingLogout():boolean {
        return this.showingLogOut;
    }
    
    getShowingLogin():boolean {
        return this.showingLogin;
    }
  constructor() { }

}
