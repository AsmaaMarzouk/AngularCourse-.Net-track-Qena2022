import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit ,AfterViewInit{
catList:ICategory[];
selectedCatID:number =0;

// angular 12 => null safe
// @ViewChild('clientName')  clientNameInput:ElementRef|null=null;
// @ViewChild('clientName')  clientNameInput:ElementRef|undefined=undefined;

// ?=> safe navigation operator
// @ViewChild('clientName')  clientNameInput?:ElementRef;
// @ViewChild('clientName')  clientNameInput:ElementRef={} as ElementRef;
// Non null assertion operator
// ! vs ? 
@ViewChild('clientName')  clientNameInput!:ElementRef;

// 
@ViewChild(ProductsComponent) productComponentRef!:ProductsComponent;

// viewChild
// @ViewChild('clientName')  clientNameInput!:ElementRef;
// receivedOrderTotalPrice from child
receivedOrderTotalPrice:number=0;
  constructor() {
    // intialize
    this.catList=[
      {id:1,name: 'Mobiles' },
      {id:2,name: 'LapTops' },
      {id:3,name: 'TV' },

  ]
   }
  ngAfterViewInit(): void {
    // if(this.clientNameInput)
    this.clientNameInput.nativeElement.value="Hello Client from ts";

    console.log(this.productComponentRef.prdListOfCategory);
    
  }

  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice:number)
  {

    this.receivedOrderTotalPrice=totalPrice;

  }

  getNewArr()
  {
    console.log(this.productComponentRef.prdListOfCategory)
  }


}
