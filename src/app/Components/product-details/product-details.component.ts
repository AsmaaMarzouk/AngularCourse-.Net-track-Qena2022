import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPrduct } from 'src/app/Models/iprduct';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
prd:IPrduct|undefined=undefined;
prdIdList:number[]=[];
// instead of sendPrdId we will name currPrdId
currPrdId:number=0;
private currIndex:number=0;
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
    this.activedRoute.paramMap.subscribe(paramMap=>{
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

    })
    
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
