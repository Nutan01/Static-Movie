import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';
import{ShowHideService}from'./shared/show-hide.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 showingProfile:boolean;
 showingMovie:boolean;
   showingLogOut:boolean;
    showingLogin:boolean;
     showingSignup:boolean;
   
constructor (private _formBuilder:FormBuilder,
private _service:ShowHideService){}

    ngOnInit() {
       this.showingLogin=this._service.getShowingLogin();
         // this.showingLogOut=this._service.getShowingLogout();
          this.showingMovie=this._service.getshowingMovie();
    }
    
    ngDoCheck(){
    
        this.showingMovie=this._service.getshowingMovie();
       // this.showingLogOut=this._service.getShowingLogout();
        this.showingLogin=this._service.getShowingLogin();
    }
 

}
