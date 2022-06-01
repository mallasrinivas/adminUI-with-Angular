import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseurl = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
  constructor(private http:HttpClient) { }
  getUserData(){
    return this.http.get(this.baseurl);
  }
}
