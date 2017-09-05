import { Component, OnInit } from '@angular/core';
import { 
Input } from 
'@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

@Input() 
rating:number; 
//input property

//rating:number=3;

starWidth:number;



constructor() { }



ngOnInit() {

}



ngOnChanges()
: void{

this.starWidth =
this.rating *86/5;

}



}
