import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false
  name=""
  dob=""
  phone=""
  place=""
  email=""
  pass=""
  cpassword=""

  readValue=()=>{
    let data={
      "name":this.name,
      "dob":this.dob,
      "phone":this.phone,
      "place":this.place,
      "email":this.email,
      "pass":this.pass,
      "cpassword":this.cpassword
    }
    console.log(data)
    this.myapi.addUser(data).subscribe(
      (response)=>{
        console.log(response)
        alert("SignUp successfull")
      }
    )
    this.name="",
    this.dob="",
    this.phone="",
    this.place="",
    this.email="",
    this.pass="",
    this.cpassword=""
    this.status=true
  }

  ngOnInit(): void {
  }

}
