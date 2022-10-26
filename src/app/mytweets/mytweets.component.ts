import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-mytweets',
  templateUrl: './mytweets.component.html',
  styleUrls: ['./mytweets.component.css']
})
export class MytweetsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  userid=localStorage.getItem("userid")

  fetchData=()=>{
    let data={
      "userid":this.userid
    }
    console.log(data)
    this.myapi.viewMyPost(data).subscribe(
      (resp)=>{
        this.postData=resp
      }
    )
  }

  postData:any=[]

  ngOnInit(): void {
  }

}
