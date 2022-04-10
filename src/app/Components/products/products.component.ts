import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IPrduct } from 'src/app/Models/iprduct';
import { ProductService } from 'src/app/Services/product.service';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  // Day2
  // catList:ICategory[];
  // selectedCatID:number = 0;

  // Day2 pipe
  // date pipe
  // todayDate:Date=new Date();

  // Day3
  prdListOfCategory: IPrduct[] = [];
  // category id from parent
  // receivedCatID:number = 0;

  //
  @Input() receivedCatID: number = 0;

  // to calculate total price
  orderTotalPrice: number = 0;

  // declare event
  // add @output to publish event
  @Output() totalPriceChanged: EventEmitter<number>;

  // Day4: inject service in constructor
  constructor(
    private prdservice: ProductService,
    private route: Router,
    private prdServicesApi: ProductsApiService
  ) {
    // declare event
    // create object from event EventEmitter
    this.totalPriceChanged = new EventEmitter<number>();

    // initialize array

    // Day2
    // this.catList=[
    //   {id:1,name:"Mobiles"},
    //   {id:2,name:"TV"},
    //   {id:3,name:"Laptops"}
    // ]
  }
  ngOnChanges(): void {
    // this.getProductOfCat();
    // Day4
    // this.prdListOfCategory = this.prdservice.getProductsByCategoryID(
    //   this.receivedCatID
    // );
    this.prdServicesApi.getProductsByCategoryID(this.receivedCatID).subscribe(
      prdList=>{
        this.prdListOfCategory=prdList;
      }
    )
  }

  ngOnInit(): void {
    // For test
    // this.getProductOfCat();
    // Day4
    // In case we don't have @input => call in ngOnInit
    // this.prdListOfCategory = this.prdservice.getProductsByCategoryID(
    //   this.receivedCatID
    // );
    this.prdServicesApi.getAllProducts().subscribe(
      prdList=>{
      this.prdListOfCategory=prdList;
    })
  }

  // Day2
  // trackBy function
  // index , item by id
  trackByProd(index: number, item: IPrduct) {
    return item.id;
  }

  // Day3
  // filter products
  // private getProductOfCat(){

  //   // check if receivedCatID==0
  //   if(this.receivedCatID==0)
  //   {
  //     // copy of prdList into prdListOfCategory
  //     this.prdListOfCategory=Array.from(this.prdList);
  //     return;
  //   }
  //   // prd=>given product
  //   //
  //   this.prdListOfCategory=this.prdList.filter((prd)=>prd.catID==this.receivedCatID);
  // }

  updateTotalPrice(prdPrice: number, itemsCount: any) {
    // this.orderTotalPrice+=(prdPrice* itemsCount);
    // ways to convert from string to number
    // this.orderTotalPrice+=(prdPrice* parseInt( itemsCount));
    // this.orderTotalPrice+=(prdPrice* Number( itemsCount));
    // this.orderTotalPrice+=(prdPrice* itemsCount as number);
    this.orderTotalPrice += prdPrice * +itemsCount;

    // To fire event use emit
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }

  // Day4
  openProductDetails(prdID: number) {
    // navigate to another page
    // navigate => array => path , parameter(productId)
    this.route.navigate(['Products', prdID]);
  }
}
