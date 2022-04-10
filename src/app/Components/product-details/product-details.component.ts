import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IPrduct } from 'src/app/Models/iprduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit ,OnDestroy{
prd:IPrduct|undefined=undefined;
prdIdList:number[]=[];
// instead of sendPrdId we will name currPrdId
currPrdId:number=0;
private currIndex:number=0;
// Day5
// non null assertion operator
// subscribtion!:Subscription;
private subscribionList:Subscription[]=[];

  constructor(private prdService:ProductService,
              private activedRoute:ActivatedRoute,
              private location:Location,
              private router:Router) { 

  }


  ngOnInit(): void {
    // First case for test
    // get pid of each product
    // let sendPrdId=this.activedRoute.snapshot.paramMap.get('pid');
    // console.log(sendPrdId);


    // second test case
    // let sendPrdId:number=(this.activedRoute.snapshot.paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;
    // let foundPrdID=this.prdService.getProductByID(sendPrdId);
    // if(foundPrdID)
    // {
    //   this.prd=foundPrdID;
    // }
    // else{
    //   alert("invalid product");
    //   this.location.back();
    // }

    // 
    this.prdIdList= this.prdService.getProductList();
    // this.currIndex=this.prdIdList.findIndex((item)=>item==this.currPrdId);

    
    // console.log(this.prdIdList);
    // this.currPrdId=(this.activedRoute.snapshot.paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;
    // let foundPrdID=this.prdService.getProductByID(this.currPrdId);
    // if(foundPrdID)
    // {
    //   this.prd=foundPrdID;
    // }
    // else{
    //   alert("invalid product");
    //   this.location.back();
    // }

    // observable

    // subscribe => async
  // alert("Test")
  //  this.subscribtion= this.activedRoute.paramMap.subscribe(paramMap=>{
    let sub1= this.activedRoute.paramMap.subscribe(paramMap=>{
    this.currPrdId=(paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;
    let foundPrdID=this.prdService.getProductByID(this.currPrdId);
    if(foundPrdID)
    {
      this.prd=foundPrdID;
    }
    else{
      alert("invalid product");
      this.location.back();
    }

    });

    // optional => 3 cases => three object (next,error,complete)
     sub1= this.activedRoute.paramMap.subscribe({
      next:(paramMap)=>{
    this.currPrdId=(paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;

      },

      error:(err)=>{
        console.log(err);
        
      },
      complete:()=>{}

    })
    // let sub2= this.activedRoute.paramMap.subscribe({
    //   next:(paramMap)=>{
    // this.currPrdId=(paramMap.get('pid'))?Number(this.activedRoute.snapshot.paramMap.get('pid')):0;

    //   },

    //   error:(err)=>{
    //     console.log(err);
        
    //   },
    //   complete:()=>{}

    // })
    this.subscribionList.push(sub1);
    // this.subscribionList.push(sub2);
    
  }

  ngOnDestroy(): void {
    // this.subscribtion.unsubscribe();
    // In case of subscribionList
    for(let sub of this.subscribionList)
    {
      sub.unsubscribe();
    }
  }
  goBack()
  {
    this.location.back();
  }
  searchProduct(prdName:string)
  {
   let foundPrd=this.prdService.searchProductByName(prdName);
   if(foundPrd)
   {
     this.prd=foundPrd;
   }
   else
   {
     alert("Not found product")
   }

  }

  goPrevious()
  {
    this.currIndex=this.prdIdList.findIndex((item)=>item==this.currPrdId);

    this.router.navigate(['/Products',this.prdIdList[--this.currIndex]])

  }

  goNext()
  {
    this.currIndex=this.prdIdList.findIndex((item)=>item==this.currPrdId);
    this.router.navigate(['/Products',this.prdIdList[++this.currIndex]])

  }
}
