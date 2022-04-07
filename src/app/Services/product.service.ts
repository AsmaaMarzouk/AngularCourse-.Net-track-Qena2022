import { Injectable } from '@angular/core';
import { IPrduct } from '../Models/iprduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private prdList: IPrduct[];

  constructor() {
    this.prdList = [
      {
        id: 1,
        name: 'Apple',
        price: 20000,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 1,
      },
      {
        id: 15,
        name: 'Samsung',
        price: 10000,
        quantity: 5,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 1,
      },
      {
        id: 7,
        name: 'Dell',
        price: 35000,
        quantity: 1,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 2,
      },
      {
        id: 20,
        name: 'HP',
        price: 15000,
        quantity: 10,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 2,
      },
      {
        id: 17,
        name: 'Toshipa',
        price: 38000,
        quantity: 0,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 3,
      },
      {
        id: 8,
        name: 'LG',
        price: 50000,
        quantity: 2,
        imgURL: 'https://fakeimg.pl/250x100/',
        catID: 3,
      },
    ];
  }
  // GetAllproduct
  getAllProduct(): IPrduct[] {
    return this.prdList;
  }

  // get Products By CategoryID
  getProductsByCategoryID(catID: number): IPrduct[] {
    if(catID==0)
    {
      return this.getAllProduct();
    }
    else
    {
      return this.prdList.filter(prd=>prd.catID==catID)
    }
  }

  // get product by id
  getProductByID(prdID: number):IPrduct|undefined {
    return this.prdList.find(prd=>prd.id==prdID);
  }

  // search product by name
  searchProductByName(prdName:string): IPrduct|undefined
  {

    return this.prdList.find(prd=>prd.name==prdName);
  }

  // list of products id
  getProductList():number[] {

    return this.prdList.map(prd=>prd.id);

  }

  // Add new product to list
  addProduct(prd:IPrduct)
  {
    this.prdList.push(prd);
  }

  // Edit
  updateProduct(prodId:number,modProd:IPrduct)
  {}

  // delete
  deleteProduct(prdId: number)
  {}
}
