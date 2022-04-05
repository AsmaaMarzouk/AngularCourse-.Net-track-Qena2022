import { Component, OnInit } from '@angular/core';
import { InfoClass } from 'src/app/Models/info-class';
import { StoreInfo } from 'src/app/Models/store-info';

@Component({
  selector: 'app-homemodified',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
// Business logic write here
  // Interface
  storeinfo:StoreInfo={
    name:"ITI Store",
    coverImgUrl:"https://fakeimg.pl/250x100/",
    branches:["Cairo","Qena","Sohag","Smart","Alex"]
  }
  // flag
  showImg:boolean = true;

// Toggle button
  toggleImg(){
    this.showImg=!this.showImg;
  }

  // Classes
  info:InfoClass;
customerFeedback:string="good";

  constructor() { 
    this.info=new InfoClass('ITI Data from class','https://fakeimg.pl/250x100/',['Alex',"Qena"])
  }


  ngOnInit(): void {
  }

}
