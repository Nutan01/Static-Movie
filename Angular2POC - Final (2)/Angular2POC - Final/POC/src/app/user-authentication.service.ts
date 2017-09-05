import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public username: string,
    public password: string) { }
}
 
var users = [
  new User('nutan','nutan'),
  new User('user','user')
];

@Injectable()
export class UserAuthenticationService {
constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }
 
  login(user){
      var authenticatedUser = users.find(u => u.username === user.username);
      debugger;
    if (authenticatedUser && authenticatedUser.password === user.password){
      // localStorage.setItem("user", authenticatedUser.email);
         localStorage.setItem("user",  JSON.stringify(user));
      localStorage.getItem(authenticatedUser.username);
      this._router.navigate(['movie']);      
      return true;
    }
    else{
      return false;
    }
    // return false;
 
  }
 
   checkCredentials(user){
       var authenticatedUser = users.find(u => u.username === user.username);
  
    if (authenticatedUser && authenticatedUser.password === user.password){
          localStorage.setItem("user",authenticatedUser.username);
           localStorage.getItem(authenticatedUser.username);
          return authenticatedUser;
    }
    else if (localStorage.getItem("user") === null){
        this._router.navigate(['Login'])}
  } 
}