import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPrduct } from '../Models/iprduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
 httpOptions={};
  constructor(private httpclient:HttpClient) { 
    this.httpOptions={
      headers: new HttpHeaders({ 
        'Content-Type':'application/json'
      })
    };
  }

  // 
  // function getAllProducts return observable type
  // observable => 
  getAllProducts():Observable<IPrduct[]>
  {
    // return this.httpclient.get<IPrduct[]>('http://localhost:3000/products');
    return this.httpclient.get<IPrduct[]>(`${environment.APIBaseURL}/products`);
  }

  // get Products by category catID
  getProductsByCategoryID(catID:number):Observable<IPrduct[]>{
    return this.httpclient.get<IPrduct[]>(`${environment.APIBaseURL}/products?catID=${catID}`);

  }
  
  // get product by id
  getProductByID(prdID:number):Observable<IPrduct>{
    return this.httpclient.get<IPrduct>(`${environment.APIBaseURL}/products/${prdID}`);
  }

  // Add new product
  // optional
  addNewProduct(newPrd:IPrduct):Observable<IPrduct>{
    return this.httpclient.post<IPrduct>(`${environment.APIBaseURL}/products`,JSON.stringify(newPrd),this.httpOptions)
       // Advanced point 
    // .pipe(
    //   retry(3),
    //   catchError((err)=>
    //   {
    //     return throwError(()=>{
    //       return new Error('Error occured ,please try again');
    //     })
    //   })
    // )

  }
  // EditProduct(prdID:IPrduct):Observable<IPrduct>{
  //   return this.httpclient.put<IPrduct>(`${environment.APIBaseURL}/products/${prdID}`,this.httpOptions);
  

  // }


}
