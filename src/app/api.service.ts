import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addUser=(data:any)=>{
    return this.http.post("http://localhost:8080/adduser",data)
  }

  signIn=(data:any)=>{
    return this.http.post("http://localhost:8080/signin",data)
  }

  addPost=(data:any)=>{
    return this.http.post("http://localhost:8080/addpost",data)
  }

  viewMyPost=(data:any)=>{
    return this.http.post("http://localhost:8080/viewmypost",data)
  }

  viewPost=()=>{
    return this.http.get("http://localhost:8080/viewpost")
  }
}
