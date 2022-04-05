import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IPrduct } from 'src/app/Models/iprduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
prdList:IPrduct[];
catList:ICategory[];
selectedCatID:number = 0;

// date pipe
todayDate:Date=new Date();
  constructor() {
    // initialize array
    this.prdList=[
      {id:1,name:"Apple",price:20000,quantity:0,imgURL:"https://fakeimg.pl/250x100/",catID:1},
      {id:15,name:"Samsung",price:10000,quantity:5,imgURL:"https://fakeimg.pl/250x100/",catID:1},
      {id:7,name:"Dell",price:35000,quantity:1,imgURL:"https://fakeimg.pl/250x100/",catID:2},
      {id:20,name:"HP",price:15000,quantity:10,imgURL:"https://fakeimg.pl/250x100/",catID:2},
      {id:17,name:"Toshipa",price:38000,quantity:0,imgURL:"https://fakeimg.pl/250x100/",catID:3},
      {id:8,name:"LG",price:50000,quantity:2,imgURL:"https://fakeimg.pl/250x100/",catID:3},
    ];
    this.catList=[
      {id:1,name:"Mobiles"},
      {id:2,name:"TV"},
      {id:3,name:"Laptops"}
    ]

   }

  ngOnInit(): void {
  }

  // trackBy function
  // index , item by id
  trackByProd(index: number,item:IPrduct){
    return item.id;
  }


}
