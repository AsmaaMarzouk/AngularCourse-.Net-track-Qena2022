import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/Models/icategory';
import { IPrduct } from 'src/app/Models/iprduct';
import { ProductsApiService } from 'src/app/Services/products-api.service';

@Component({
  selector: 'app-addnewproduct',
  templateUrl: './addnewproduct.component.html',
  styleUrls: ['./addnewproduct.component.scss'],
})
export class AddnewproductComponent implements OnInit {
  catList: ICategory[];
  newPrd: IPrduct = {} as IPrduct;
  constructor(
    private prdServiceAPI: ProductsApiService,
    private router: Router
  ) {
    this.catList = [
      { id: 1, name: 'Mobiles' },
      { id: 2, name: 'LapTops' },
      { id: 3, name: 'TV' },
    ];
  }

  ngOnInit(): void {}
  InsertData() {
    // static data
    // let testPrd:IPrduct={
    //   id:80,
    //   name:"testPrd From API",
    //   price:5000,
    //   quantity:5,
    //   imgURL:"https://fakeimg.pl/250x100/",
    //   catID:3
    // }
    // this.prdServiceAPI.addNewProduct(testPrd).subscribe({
    //   // success
    //   next:(prd)=>{
    //     this.router.navigate(['/Products'])
    //   },
    //   // error
    //   error:(err)=>{
    //     console.log(err);
    //     alert("Error occured");

    //   }
    // })

    // Second case
    this.prdServiceAPI.addNewProduct(this.newPrd).subscribe({
      // success
      next: (prd) => {
        this.router.navigate(['/Products']);
      },
      // error
      error: (err) => {
        console.log(err);
        alert('Error occured');
      },
    });
  }
}
