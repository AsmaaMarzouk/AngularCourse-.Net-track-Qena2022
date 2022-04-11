import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-resgister',
  templateUrl: './user-resgister.component.html',
  styleUrls: ['./user-resgister.component.scss']
})
export class UserResgisterComponent implements OnInit {
// declare variable from formGroup
usrFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    // this.usrFormGroup=new FormGroup({
    //   fullName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    //   email:new FormControl(''),
    //   mobileNo:new FormControl(''),
    //   address:new FormGroup({

    //     city:new FormControl(''),
    //     street:new FormControl(''),
    //   }),
    //   password:new FormControl(''),

    // });

    this.usrFormGroup=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(3)]],
      email:[''],
      // mobileNo:[''],
      mobileNo:fb.array([fb.control('')]),
      address:this.fb.group({
        city:[''],
        street:[''],
      }),
      referral:[''],
      referralOther:[''],
      password:['']
    })
   }

  ngOnInit(): void {
    // must set all values
    // this.usrFormGroup.setValue({
    //   fullName:"asd",
    //   email:"asd@gmail",
    //   mobileNo:"2588",

    // })


    // allow you to set some of values
    // this.usrFormGroup.patchValue({
    //     fullName:"asd",
    //   email:"asd@gmail",
    //   mobileNo:"2588",
    // })
  }
// convert fullName to property
get fullName(){
  return this.usrFormGroup.get('fullName');
}
get email()
{
  return this.usrFormGroup.get('email');
}

get mobileNo(){
  return this.usrFormGroup.get('mobileNo') as FormArray;
}
get referral(){
  return this.usrFormGroup.get('referral');
}

  register(){
    // call resgister api
    // use register function from service 
    // this.userService.register(this.usrFormGroup.value)
  }
  addMobile(){
    this.mobileNo.push(this.fb.control(''));
  }
  updateReferral(){
    if(this.referral?.value=='other')
    {
      this.usrFormGroup.get('referralOther')?.addValidators([Validators.required])
    }
    else{ 
      this.usrFormGroup.get('referralOther')?.clearValidators();
    }
    // update value => update in view 
    this.usrFormGroup.get('referralOther')?.updateValueAndValidity();
  }
}
