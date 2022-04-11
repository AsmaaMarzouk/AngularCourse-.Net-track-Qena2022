import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
// BehavoiurSubject=> observer (subscribe to get current value) , observable (current value emitted by observable source using next() method or intial/default value)
private isLoggedSubject:BehaviorSubject<boolean>;
  constructor() {

    // property with default or intial 
    this.isLoggedSubject=new BehaviorSubject<boolean>(this.IsUserLogged);

   }

   login(userName:string,password:string){
    //  api and get access token
     let userToken='12345678';
     localStorage.setItem("token",userToken);
     this.isLoggedSubject.next(true);

   }
   logout(){
     localStorage.removeItem("token");
     this.isLoggedSubject.next(false);
   }
   get IsUserLogged():boolean{
 
    return (localStorage.getItem("token"))?true:false;
   }

  //  getStatus():Observable<boolean>{
  //       //  get status
  //   //  return this.isLoggedSubject.asObservable();
  //  }

}
