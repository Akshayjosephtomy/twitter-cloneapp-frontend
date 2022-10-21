import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }

  email=""
  pass=""

  readvalue=()=>{
    let data={
      "email":this.email,
      "pass":this.pass
    }
    console.log(data)
  }
  ngOnInit(): void {
  }

}
