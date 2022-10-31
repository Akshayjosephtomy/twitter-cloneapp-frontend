import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tweetpage',
  templateUrl: './tweetpage.component.html',
  styleUrls: ['./tweetpage.component.css']
})
export class TweetpageComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  name=localStorage.getItem("name")
  userid=localStorage.getItem("userid")
  tweet=""

  readvalue=()=>{
    let data={
      "tweet":this.tweet,
      "userid":this.userid
    }
    console.log(data)
    this.myapi.addPost(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Post Added successfully")
      }
    )
    this.tweet=""

  }  

  fetchData=()=>{
    let data={
      "userid":this.userid
    }
    console.log(data)
    this.myapi.viewPost().subscribe(
      (resp)=>{
        this.postData=resp
      }
    )
  }

  postData:any=[]

  ngOnInit(): void {
  }

}
