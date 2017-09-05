import { Component, OnInit } from '@angular/core';
import {UserAuthenticationService, User} from '../user-authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../shared/authenticate.service';
import { ShowHideService } from '../shared/show-hide.service';

@Component({
     moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public user = new User('','');
    model: any = {};
  
    returnUrl: string;
  
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticateService,
        private showHideService: ShowHideService,
        private userAuth:UserAuthenticationService) { }



    ngOnInit() {
        // reset login status
       // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

       showingLogOut:boolean= this.showHideService.showingLogOut;
       showingLogin:boolean=   this.showHideService.showingLogin;
       showingSignUp:boolean=   this.showHideService.showingLogin;
       showingMovie:boolean=   this.showHideService.showingMovie;
msg:string;
showMsg:boolean;

setUser(name:string,password:string){
    this.user.username=name;
    this.user.password=password;
     localStorage.setItem("user",  JSON.stringify(this.user));
}
getUserName(){
    return this.user.username;
}
getUserPass(){
    return this.user.password;
}

    login() {
                    if( this.userAuth.login(this.user)==true){

                     this.showHideService.setShowingLogin(false);
                     this.showHideService.setshowingMovie(true);
                     this.showHideService.setShowingLogout(true);
                     this.showingLogin=false;
                     this.showMsg=false;
                    }
                    
                     if( this.userAuth.login(this.user)==false){
                         
                       this.showMsg=true;
                         this.msg="User name & password incorrect..!!";

                     }

        // this.authenticationService.login(this.model.username, this.model.password)
        //     .subscribe(
        //         data => {
        //             this.showHideService.setShowingLogin(false);
        //             this.showHideService.setshowingMovie(true);
        //             this.showHideService.setShowingLogout(true);
        //             this.router.navigate(['/movie']);
        //             this.showingLogin=false;
        //         },
        //         error => {
                                    
        //         });
    }
}

