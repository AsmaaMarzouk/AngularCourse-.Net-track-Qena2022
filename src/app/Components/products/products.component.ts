import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IPrduct } from 'src/app/Models/iprduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit ,OnChanges{
prdList:IPrduct[];
// Day2
// catList:ICategory[];
// selectedCatID:number = 0;

// Day2 pipe
// date pipe
// todayDate:Date=new Date();

// Day3
prdListOfCategory:IPrduct[]=[];
// category id from parent 
// receivedCatID:number = 0;

// 
@Input() receivedCatID:number = 0;

// to calculate total price
orderTotalPrice:number = 0;

// declare event
// add @output to publish event
@Output() totalPriceChanged:EventEmitter<number>;





  constructor() {
     // declare event
    // create object from event EventEmitter
    this.totalPriceChanged=new EventEmitter<number>();

    // initialize array
    this.prdList=[
      {id:1,name:"Apple",price:20000,quantity:0,imgURL:"https://fakeimg.pl/250x100/",catID:1},
      {id:15,name:"Samsung",price:10000,quantity:5,imgURL:"https://fakeimg.pl/250x100/",catID:1},
      {id:7,name:"Dell",price:35000,quantity:1,imgURL:"https://fakeimg.pl/250x100/",catID:2},
      {id:20,name:"HP",price:15000,quantity:10,imgURL:"https://fakeimg.pl/250x100/",catID:2},
      {id:17,name:"Toshipa",price:38000,quantity:0,imgURL:"https://fakeimg.pl/250x100/",catID:3},
      {id:8,name:"LG",price:50000,quantity:2,imgURL:"https://fakeimg.pl/250x100/",catID:3},
    ];

    // Day2
    // this.catList=[
    //   {id:1,name:"Mobiles"},
    //   {id:2,name:"TV"},
    //   {id:3,name:"Laptops"}
    // ]

   }
  ngOnChanges(): void {
    this.getProductOfCat();
  }

  ngOnInit(): void {
    // For test
    // this.getProductOfCat();

  }

  // Day2
  // trackBy function
  // index , item by id
  trackByProd(index: number,item:IPrduct){
    return item.id;
  }

  // Day3
  // filter products
  private getProductOfCat(){

    // check if receivedCatID==0
    if(this.receivedCatID==0)
    {
      // copy of prdList into prdListOfCategory
      this.prdListOfCategory=Array.from(this.prdList);
      return;
    }
    // prd=>given product
    // 
    this.prdListOfCategory=this.prdList.filter((prd)=>prd.catID==this.receivedCatID);
  }

  updateTotalPrice(prdPrice:number,itemsCount:any){
    // this.orderTotalPrice+=(prdPrice* itemsCount);
    // ways to convert from string to number
    // this.orderTotalPrice+=(prdPrice* parseInt( itemsCount));
    // this.orderTotalPrice+=(prdPrice* Number( itemsCount));
    // this.orderTotalPrice+=(prdPrice* itemsCount as number);
    this.orderTotalPrice+=(prdPrice* +itemsCount);

    // To fire event use emit
    this.totalPriceChanged.emit(this.orderTotalPrice)

  }


}
