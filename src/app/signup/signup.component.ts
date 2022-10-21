import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  name=""
  dob=""
  phone=""
  place=""
  email=""
  password=""
  cpassword=""

  readValue=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "email":this.email,
      "password":this.password,
      "cpassword":this.cpassword
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
